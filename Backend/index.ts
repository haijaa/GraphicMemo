import cors from 'cors'
import * as dotenv from 'dotenv'
import { Client } from "pg";
import express, { Request, Response } from "express";
import { GetComic, PostComic, DeleteComic, GetComicWithId } from '../Interfaces/SharedInterfaces'
import { ComicDB, ComicDBid } from '../Backend/Interfaces/InterfaceBackend'

dotenv.config();

const port: number = 3000;

const client = new Client({
    connectionString: process.env.PGURI,
  });

client.connect();

const app = express()

app.use(cors(), express.json());

app.get('/comics', async (_request: Request, response: Response<GetComic[]>) => {
    const { rows } = await client.query<ComicDB>(
        'SELECT * FROM comics;'
    );
    const comics: GetComic[] = rows.map((row) => ({
      id: row.comic_id,
      title: row.comic_title,
      description: row.comic_description,
      issue: row.comic_issue,
      character: row.comic_character,
      author: row.comic_author,
      publisher: row.comic_publisher,
      released: row.comic_released,
      imagecover: row.comic_imagecover
    }))
    response.send(comics)
})

app.get('/comics/:id', async (request: Request, response: Response<GetComicWithId[]>) => {
  const { id } = request.params;
  const { rows } = await client.query<ComicDBid> (
    `SELECT comics.comic_id, comics.comic_title, comics.comic_description, comics.comic_issue, comics.comic_character, comics.comic_author, comics.comic_publisher, comics.comic_released, comics.comic_imageCover, COALESCE(
    json_agg(
      json_build_object(
        'review_id', review.review_id,
        'review_user', review.review_user,
        'review_text', review.review_text,
        'review_rating', review.review_rating,
        'created_at', review.created_at
      )
    ) FILTER (WHERE review.review_id IS NOT NULL),
    '[]'
  ) AS reviews FROM comics LEFT JOIN review ON comics.comic_id = review.comic_id WHERE comics.comic_id = $1 GROUP BY comics.comic_id;`,
    [id]
  );
  const comicsWithReviews: GetComicWithId[] = rows.map(row => ({
    id: row.comic_id,
    title: row.comic_title,
    description: row.comic_description,
    issue: row.comic_issue,
    character: row.comic_character,
    author: row.comic_author,
    publisher: row.comic_publisher,
    released: row.comic_released,
    imagecover: row.comic_imagecover,
    reviews: row.reviews || []
  }));

  response.status(200).json(comicsWithReviews);
})

app.post('/comics/post', async (request: Request, response: Response) => {
  const { title, description, issue, character, author, publisher, released, imagecover } = request.body as PostComic;
  try {
    const { rows } = await client.query<ComicDB>(
      "INSERT INTO comics (comic_title, comic_description, comic_issue, comic_character, comic_author, comic_publisher, comic_released, comic_imagecover) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;",
      [title, description, issue, character, author, publisher, released, imagecover]
    );
    
    response.status(201).json({message: 'Add successful!', data: rows[0]})
  } catch(error) {
    console.log(error)
    response.status(500).send('Issues on serverside')
  }
})

app.delete('/comics/delete', async (request: Request, response: Response) => {
  const { id } = request.body as DeleteComic
  try {
    const { rows } = await client.query<DeleteComic> (
      'DELETE FROM comics WHERE comic_id = $1', [id]
    )
    response.status(200).json(`Comic with ID ${id} has been deleted.`)
  } catch (error) {
    response.status(500).json('Issues on serverside')
  }
})

app.listen(port, () => {
    console.log(`Backend started on port ${port}`)
  })