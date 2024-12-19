import { GetComic } from "../../../Interfaces/SharedInterfaces";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";
import { useEffect, useState } from "react";

export default function ManageComics() {
  const [comicList, setComicList] = useState<GetComic[]>([]);

  const FetchComics = async () => {
    fetch("http://localhost:3000/comics")
      .then((response) => response.json())
      .then((data) => setComicList(data));
  };

  const DeleteComic = async (id: number) => {
    await fetch(`http://localhost:3000/comics/delete`, {
      method: "DELETE",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({
        id: id,
      }),
    });
    FetchComics();
  };

  useEffect(() => {
    FetchComics();
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-center w-full ">
        <div className="w-3/4 flex flex-col">
          <p className="headlineBlue classBorder w-full">List to manage:</p>
          {comicList.map((comic) => (
            <div
              data-cy="comic-item"
              key={comic.id}
              className="flex justify-between"
            >
              <p data-cy="title-element" className="smallBlue">
                {comic.title} #{comic.issue}
              </p>
              <span onClick={() => DeleteComic(comic.id)} className="hover">
                <Icon
                  data-cy="delete-button"
                  path={mdiTrashCanOutline}
                  size={1}
                  className="mb-2"
                />
              </span>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
