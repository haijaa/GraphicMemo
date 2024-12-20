import AddComic from "../components/AddComic";
import Icon from "@mdi/react";
import { mdiCogOutline } from "@mdi/js";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex items-center justify-between p-5 bgBlue h-48 text-lg font-bold">
        <div>
          <h1>GraphicMemo</h1>
        </div>
        <div className="flex hover">
          <div data-cy="home-button" onClick={() => navigate("/")}>
            Home
          </div>
          <p className="pl-5 pr-5">|</p>
          <AddComic />
          <p className="pl-5 pr-5">|</p>
          <div
            data-cy="manage-comics-link"
            className="flex items-center justify-center"
            onClick={() => navigate("/manageComics")}
          >
            <p>Manage comics</p>
            <Icon path={mdiCogOutline} size={1} />
          </div>
        </div>
      </nav>
    </>
  );
}
