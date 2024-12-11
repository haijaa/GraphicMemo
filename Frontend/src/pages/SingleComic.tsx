import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetComicWithId } from "../../../Interfaces/SharedInterfaces";

export default function SingleComic () {
    const [comic, setComic] = useState<GetComicWithId[]>([]);
    const { id } = useParams<string>();

    useEffect(() => {
            fetch(`http://localhost:3000/comics/${id}`)
                .then((response) => response.json())
                .then((result: GetComicWithId[]) => setComic(result))        
    }, [id]); 
    console.log(comic)

    return (
        <div>
            <main className="m-5">
            {comic.map((com) => (
                <div id="comicBox" key={com.id} className="flex">
                <div id="leftSide" className="w-[30%] flex justify-center">
                <img src={com.imagecover} className="w-[300px] h-[400px]"/>
                </div>
                <div id="rightSide" className="w-[70%] ">
                <div>
                <p className="headlineBlue classBorder">{com.title} #{com.issue}</p>
                </div>
                <div className="mb-5">
                    <div className="flex"><p className="font-bold">Writer:</p> <p className="pl-2">{com.author}</p></div>
                    <div className="flex"><p className="font-bold">Publisher:</p> <p className="pl-2">{com.publisher}</p></div>
                    <div className="flex"><p className="font-bold">Released:</p> <p className="pl-2">{com.released}</p></div>
                    <div className="flex"><p className="font-bold">Main character:</p> <p className="pl-2">{com.character}</p></div>
                </div>
                <div>
                <div className="mt-5"><p className="font-bold">Description:</p> <p>{com.description}</p></div>
                </div>
                </div>
            </div>
            ))}
            </main>
        </div>
    );
}
