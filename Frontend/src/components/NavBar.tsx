import AddComic from "../components/AddComic";


export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between p-5">
        <div>
          <h1>GraphicMemo</h1>
        </div>
        <div className="flex ">
        <p className="mr-5 hover">Show all </p>
        <p className="mr-5">|</p>
        <p className="mr-5 hover">Top comics </p>
        <p className="mr-5">|</p>
        <p className="mr-5 hover">Marvel </p>
        <p className="mr-5">|</p>
        <p className="mr-5 hover">DC </p>
        <p className="mr-5">|</p>
        <p className="mr-5 hover">Image </p>
        <p className="mr-5">|</p>
        <AddComic /> 
        </div>
      </nav>
    </>
  );
}
