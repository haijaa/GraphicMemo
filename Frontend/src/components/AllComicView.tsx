import { useState, useEffect } from "react";
import { GetComic } from "../../../Interfaces/SharedInterfaces";
import { Link } from "react-router-dom";
import DC from "../assets/dc.png";
import MARVEL from "../assets/marvel.png";
import LatestReviews from "./LatestReviews";
import ListAllTable from "./ListAllTable";

export default function AllComicView() {
  const [allComics, setAllComics] = useState<GetComic[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/comics")
      .then((respone) => respone.json())
      .then((data) => setAllComics(data));
  }, []);

  return (
    <>
      <div id="canvas">
        <div
          id="mainDiv"
          className="bgWhite flex flex-col justify-center items-center"
        >
          <div className="classBorder w-3/4">
            <p className="headlineBlue">Latest added comics:</p>
          </div>
          <div className="flex justify-between w-3/4 items-center">
            {allComics.length ? (
              [...allComics]
                .reverse()
                .slice(0, 4)
                .map((com) => (
                  <div
                    key={com.id}
                    className="w-[60%] flex items-center flex-col mb-10 mt-5 pb-5"
                  >
                    <Link to={`/comics/${com.id}`}>
                      <img
                        src={com.imagecover}
                        className="w-[130px] h-[190px]"
                      />
                      <h1 id="character">
                        {com.character} #{com.issue}
                      </h1>
                    </Link>
                    <div className="bg-green-500 w-16 h-16 flex items-center justify-center font-bold text-white text-3xl">
                      <p>5.5</p>
                    </div>
                    Rating
                  </div>
                ))
            ) : (
              <p>Can't find any comics :(</p>
            )}
          </div>
          <div className="bg-gray-200 h-28 w-full flex justify-center items-center text-grey">
            <img data-cy="img-dc" src={DC} style={{ width: "150px" }} />
            <img data-cy="img-marvel" src={MARVEL} style={{ width: "150px" }} />
          </div>
          <div className="w-3/4 flex justify-between mt-5">
            <ListAllTable allComics={allComics} />
            <LatestReviews />
          </div>
        </div>
      </div>
    </>
  );
}
