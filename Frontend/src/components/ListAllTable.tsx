import { Link } from "react-router-dom";
import { GetComic } from "../../../Interfaces/SharedInterfaces";

interface AllComicProp {
  allComics: GetComic[];
}

export default function ListAllTable({ allComics }: AllComicProp) {
  return (
    <>
      <div data-cy="allcomics-table">
        <p className="headlineBlue" data-cy="latest-all-comics-table">
          All comics:
        </p>
        {allComics.map((biglist) => (
          <Link data-cy="container-comics-list" to={`/comics/${biglist.id}`}>
            <div>
              <p className="smallBlue hover">{biglist.title}</p>
              <p className="smallBlack">{biglist.publisher}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
