import { useState } from "react";
import Icon from "@mdi/react";
import { mdiImageMultipleOutline, mdiPlus } from "@mdi/js";
import { toast } from "react-toastify";

export default function AddComic() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [issue, setIssue] = useState(Number);
  const [character, setCharacter] = useState("");
  const [author, setAuthor] = useState("");
  const [released, setReleased] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [publisher, setPublisher] = useState("");

  const PostComic = async () => {
    const postOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: description,
        issue: issue,
        character: character,
        author: author,
        publisher: publisher,
        released: released,
        imagecover: coverImage,
      }),
    };
    try {
      await fetch("http://localhost:3000/comics/post", postOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
      toast.success(
        <div data-cy="success-toast">Yayy! {title} added to library</div>
      );
      setShowModal(false);

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        data-cy="open-modal"
        onClick={() => setShowModal(true)}
        className="hover flex align-center justify-center"
      >
        <p> Add comic </p>
        <Icon path={mdiPlus} size={1} className="pl-1" data-cy="icon-image" />
      </div>
      {showModal && (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white">
          <div
            id="content"
            className="bgBlue p-5 rounded-lg shadow-lg flex flex-col justify-between w-[50%] h-[50%]"
          >
            <main className="flex justify-between h-full">
              <div
                id="leftSide"
                className="flex justify-center align-center w-[60%]"
                style={{ alignItems: "center" }}
              >
                {coverImage ? (
                  <img src={coverImage} className="w-[80%] h-[100%]" />
                ) : (
                  <Icon path={mdiImageMultipleOutline} size={5} />
                )}
              </div>
              <div id="rightSide" className="flex flex-col w-[40%]">
                <p className="pb-5">Fill out all fields and press add</p>
                <input
                  data-cy="comic-title"
                  type="text"
                  className="inputField"
                  placeholder="Add a title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <input
                  data-cy="comic-description"
                  type="text"
                  className="inputField"
                  placeholder="Add a description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <input
                  data-cy="comic-issue"
                  type="text"
                  className="inputField"
                  placeholder="Add issuenumber"
                  value={issue | 0}
                  onChange={(e) => setIssue(parseInt(e.target.value))}
                />

                <input
                  data-cy="comic-character"
                  type="text"
                  className="inputField"
                  placeholder="Add character"
                  value={character}
                  onChange={(e) => setCharacter(e.target.value)}
                />

                <input
                  data-cy="comic-author"
                  type="text"
                  className="inputField"
                  placeholder="Add author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />

                <input
                  data-cy="comic-publisher"
                  type="text"
                  className="inputField"
                  placeholder="Add publisher"
                  value={publisher}
                  onChange={(e) => setPublisher(e.target.value)}
                />

                <input
                  data-cy="comic-released"
                  type="text"
                  className="inputField"
                  placeholder="Add year of release"
                  value={released}
                  onChange={(e) => setReleased(e.target.value)}
                />

                <input
                  data-cy="comic-coverimage"
                  type="text"
                  className="inputField"
                  placeholder="Add cover"
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                />
              </div>
            </main>
            <div className="flex justify-end">
              <div className="flex w-1/4 justify-between">
                <button
                  data-cy="close-modal"
                  className="bg-red-900 w-24 rounded mr-4"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  data-cy="comic-add-comic-button"
                  className="bg-green-900 w-24 rounded"
                  onClick={() => PostComic()}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
