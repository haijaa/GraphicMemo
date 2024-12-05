export interface comic {
    comicTitle: string
    comicDescription: string
    comicIssue: number
    comicCharacter: string
    comicAuthor: string
    comicPublisher: string
    comicReleased: string
    comicImageCover: string
}

export interface getComic extends comic {
    comicId: number;
}

export interface postComic extends comic {}