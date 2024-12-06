export interface Comic {
    title: string
    description: string
    issue: number
    character: string
    author: string
    publisher: string
    released: number
    imagecover: string
}

export interface GetComic extends Comic {
    id: number;
}

export interface PostComic extends Comic {}