import { useEffect, useState } from "react";
import { GetReviewLatest } from "../../../Interfaces/SharedInterfaces";
import { Link } from "react-router-dom";

export default function LatestReviews() {
  const [reviews, setReviews] = useState<GetReviewLatest[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/reviews/latest")
      .then((response) => response.json())
      .then((data) => setReviews(data.reverse()));
  }, []);
  return (
    <div>
      <ol className="flex flex-col justify-center items-center">
        <p className="headlineBlue">Latest reviews</p>
        {reviews.slice(0, 3).map((rev, index) => (
          <Link to={`/comics/${rev.comic_id}`}>
            <li key={index} className="smallBlue hover">
              {rev.review_text?.slice(0, 30)}...
              <p className="smallBlack">{rev.comic_title}</p>
            </li>
          </Link>
        ))}
        <p>Click on a review to see more.</p>
      </ol>
    </div>
  );
}
