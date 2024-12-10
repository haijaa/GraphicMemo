import AddComic from "../components/AddComic";
import { useNavigate } from "react-router-dom";


export default function NavBar() {
const navigate = useNavigate()
  return (
    <>
      <nav className="flex items-center justify-between p-5 bgBlue h-48 text-lg font-bold">
        <div>
          <h1>GraphicMemo</h1>
        </div>
        <div className="flex hover">
        <div onClick={() => navigate('/')}>
        Home 
        </div>
        <p className="pl-5 pr-5">
          |
        </p>
        <AddComic /> 
        </div>
      </nav>
    </>
  );
}
