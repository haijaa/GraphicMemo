import cors from 'cors'
import * as dotenv from 'dotenv'
import { Client } from "pg";
import express, { Request, Response } from "express";
import { getComics } from '../Interfaces/SharedInterfaces'

dotenv.config();

const port: number = 3000;

const client = new Client({
    connectionString: process.env.PGURI,
  });

client.connect();

const app = express()

app.use(cors(), express.json());

app.get('/comics', async (_request: Request, response: Response) => {
    const { rows } = await client.query<getComics>(
        'SELECT * FROM comics;'
    )
    response.send(rows)
})

app.listen(port, () => {
    console.log(`Backend started on port ${port}`)
  })