export interface ComicDB {
    comic_id: number,
    comic_title: string,
    comic_description: string,
    comic_issue: number,
    comic_character: string,
    comic_author: string,
    comic_publisher: string,
    comic_released: number,
    comic_imagecover: string
}

export interface ComicDBid extends ComicDB {
    reviews: {
        review_id: number;
        review_user: string;
        review_text: string | null;
        review_rating: number | null;
        created_at: string;
      }[];
}