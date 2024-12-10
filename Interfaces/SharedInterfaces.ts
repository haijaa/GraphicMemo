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

export interface DeleteComic {
    id: number
}

export interface GetComicWithId extends Comic {
    id: number;
    reviews: {
      review_id: number;
      review_user: string;
      review_text: string | null;
      review_rating: number | null;
      created_at: string;
    }[];
  }
  