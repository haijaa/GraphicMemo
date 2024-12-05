import cors from 'cors'
import * as dotenv from 'dotenv'
import { Client } from "pg";
import express, { Request, Response } from "express";
import { getComic, postComic } from '../Interfaces/SharedInterfaces'

dotenv.config();

const port: number = 3000;

const client = new Client({
    connectionString: process.env.PGURI,
  });

client.connect();

const app = express()

app.use(cors(), express.json());

app.get('/comics', async (_request: Request, response: Response) => {
    const { rows } = await client.query<getComic>(
        'SELECT * FROM comics;'
    )
    response.send(rows)
})

app.post('/comics', async (request: Request, response: Response) => {
  const { comicTitle, comicDescription, comicIssue, comicCharacter, comicAuthor, comicPublisher, comicReleased, comicImageCover } = request.body as postComic;
  try {
    const { rows } = await client.query<postComic>(
      "",
      [comicTitle, comicDescription, comicIssue, comicCharacter, comicAuthor, comicAuthor, comicPublisher, comicReleased, comicImageCover]
    )
    response.status(201).json(rows[0]);
  } catch {
    response.status(500).send('Issues on serverside')
  }
})

app.listen(port, () => {
    console.log(`Backend started on port ${port}`)
  })