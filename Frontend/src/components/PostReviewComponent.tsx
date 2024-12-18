import { useState } from "react";
import { Icon } from "@mdi/react";
import { mdiArrowDown } from "@mdi/js";

interface PostProps {
  id: string | undefined;
  fetchWithId: (id: string | undefined) => void;
}

export default function PostReviewComponent({ id, fetchWithId }: PostProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [revUser, setRevuser] = useState("");
  const [revText, setRevtext] = useState("");
  const [revRating, setRevrating] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const PostReviewFunction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify({
          comic_id: id,
          review_user: revUser,
          review_text: revText,
          review_rating: revRating,
        }),
      });
      fetchWithId(id);
      setIsSubmitting(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
      setTimeout(() => {
        setIsSubmitting(false);
      }, 4000);
    } catch (error) {
      console.log("Gick åt skogen", error);
    }
  };

  return (
    <>
      <div className="w-3/4 m-5">
        <div
          className="classBorder p-5 hover"
          data-cy="open-accordion"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h1 className="headlineBlue flex justify-between items-center">
            Post review
            <Icon path={mdiArrowDown} size={1} />
          </h1>
        </div>
        <div
          id="mainDiv"
          className={`m-5 transition-all ${
            isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
        >
          {isSubmitting ? (
            <div className="text-green-500 text-xl" data-cy="submit-success">
              Your review has been sent, have a nice day
            </div>
          ) : (
            <form onSubmit={PostReviewFunction}>
              <label className="flex flex-col mt-2 mb-2 smallBlue">
                Username:
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-1/4 border"
                  data-cy="username-input"
                  onChange={(e) => setRevuser(e.target.value)}
                />
              </label>
              <label className="flex flex-col mt-2 mb-2 smallBlue">
                Select rating:
                <select
                  data-cy="review-rating"
                  className="w-1/4"
                  onChange={(e) => setRevrating(e.target.value)}
                >
                  <option value="0">Grade</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <label className="flex flex-col mt-2 mb-2 smallBlue">
                Drop a comment
                <textarea
                  placeholder="Amazing comicbook!!"
                  className="w-2/4 border h-24 resize-none"
                  data-cy="content-input"
                  onChange={(e) => setRevtext(e.target.value)}
                />
              </label>
              <input
                type="submit"
                value="Send"
                className="border border-blue-200 rounded-md text-xl text-italic hover w-24 p-2"
                data-cy="submit-review"
              />
            </form>
          )}
        </div>
      </div>
    </>
  );
}
