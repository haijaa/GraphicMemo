import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetComicWithId } from "../../../Interfaces/SharedInterfaces";
import PostReviewComponent from "../components/PostReviewComponent";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";
import { toast } from "react-toastify";

export default function SingleComic() {
  const [comic, setComic] = useState<GetComicWithId[]>([]);
  const { id } = useParams<string>();

  const FetchWithId = async (id: string | undefined) => {
    const response = await fetch(`http://localhost:3000/comics/${id}`);
    const data: GetComicWithId[] = await response.json();
    setComic(data);
  };

  const DeleteComicFunction = async (reviewId: number) => {
    await fetch(`http://localhost:3000/comics/delete`, {
      method: "DELETE",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({
        id: reviewId,
      }),
    });
    window.location.reload();
  };

  const DeleteReviewFunction = async (revId: number) => {
    await fetch(`http://localhost:3000/reviews`, {
      method: "DELETE",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({
        review_id: revId,
      }),
    });
    FetchWithId(id);
    toast.success(<div>Review has been deleted.</div>);
  };

  useEffect(() => {
    FetchWithId(id);
  }, [id]);

  return (
    <div>
      <main className="m-5 flex flex-col items-center justify-center">
        {comic.map((com) => (
          <div id="comicBox" key={com.id} className="flex">
            <div id="leftSide" className="w-[30%] flex justify-center">
              <img
                id="img"
                src={com.imagecover}
                className="w-[300px] h-[400px]"
              />
            </div>
            <div id="rightSide" className="w-[70%] ">
              <div>
                <p className="headlineBlue classBorder" id="title">
                  {com.title} #{com.issue}
                </p>
                <div onClick={() => DeleteComicFunction(com.id)}>
                  <Icon path={mdiTrashCanOutline} size={1} />
                </div>
              </div>
              <div className="mb-5">
                <div className="flex">
                  <p className="font-bold">Writer:</p>{" "}
                  <p className="pl-2" id="writer">
                    {com.author}
                  </p>
                </div>
                <div className="flex">
                  <p className="font-bold">Publisher:</p>{" "}
                  <p className="pl-2">{com.publisher}</p>
                </div>
                <div className="flex">
                  <p className="font-bold">Released:</p>{" "}
                  <p className="pl-2">{com.released}</p>
                </div>
                <div className="flex">
                  <p className="font-bold">Main character:</p>{" "}
                  <p className="pl-2">{com.character}</p>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <p className="font-bold">Description:</p>{" "}
                  <p>{com.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="m-5 w-screen flex flex-col items-center justify-center">
          <div className="classBorder w-3/4">
            <h1 className="headlineBlue p-5">Reviews</h1>
          </div>
          <div id="reviewContainer" className="w-3/4">
            {comic.length > 0 &&
              comic[0].reviews.map((review) => (
                <div key={review.review_id} className="mb-4 mt-2 border-b">
                  <div className="flex justify-between">
                    <p className="smallBlue">{review.review_user}</p>
                    <p
                      className="text-sm text-gray-500 flex"
                      onClick={() => DeleteReviewFunction(review.review_id)}
                    >
                      {new Date(review.created_at).toLocaleDateString()}
                      <Icon
                        path={mdiTrashCanOutline}
                        size={1}
                        className="ml-5 hover"
                      />
                    </p>
                  </div>
                  <p className="mt-2">{review.review_text}</p>
                  <p className="mt-2 font-semibold">
                    Rating: {review.review_rating}/5
                  </p>
                </div>
              ))}
          </div>
        </div>
        <PostReviewComponent id={id} fetchWithId={FetchWithId} />
      </main>
    </div>
  );
}
