import cors from 'cors'
import * as dotenv from 'dotenv'
import { Client } from "pg";
import express, { Request, Response } from "express";
import { GetComic, PostComic } from '../Interfaces/SharedInterfaces'
import { ComicDB } from '../Backend/Interfaces/InterfaceBackend'

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

app.listen(port, () => {
    console.log(`Backend started on port ${port}`)
  })