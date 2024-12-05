import { useState } from "react"
import Icon from "@mdi/react"
import { mdiImageMultipleOutline, mdiPlus } from "@mdi/js"

export default function AddComic () {
    const [showModal, setShowModal]= useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [issue, setIssue] = useState(Number)
    const [character, setCharacter] = useState('')
    const [author, setAuthor] = useState('')
    const [released, setReleased] = useState('')
    const [coverImage, setCoverImage] = useState('')
    const [publisher, setPublisher] = useState('')


    return (
        <>
        <div id="openModal" onClick={() => setShowModal(true)} className="hover flex align-center justify-center">
           <p> Add comic</p>
           <Icon path={mdiPlus} size={1} className="pl-1"/>
        </div>
        {showModal && (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white">
        <div id="content" className="bg-stone-600 p-5 rounded-lg shadow-lg flex flex-col justify-between w-[50%] h-[50%]">
            <main className="flex justify-between h-full">
            <div id="leftSide" className="flex justify-center align-center w-[60%]" style={{alignItems: 'center'}}>
                <Icon path={mdiImageMultipleOutline} size={5}/>
            </div>
            <div id="rightSide" className="flex flex-col w-[40%]">
            <p className="pb-5">Fill out all fields and press add</p>
            <input 
            id="addComicTitle" 
            type="text" 
            className="inputField" 
            placeholder="Add a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>

            <input 
            id="addComicDescription" 
            type="text" 
            className="inputField" 
            placeholder="Add a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}/>

            <input 
            id="addComicIssue" 
            type="text" 
            className="inputField" 
            placeholder="Add issuenumber"
            value={issue}
            onChange={(e) => setIssue(parseInt(e.target.value))}/>

            <input 
            id="addComicCharacter" 
            type="text" 
            className="inputField" 
            placeholder="Add character"
            value={character}
            onChange={(e) => setCharacter(e.target.value)}/>

            <input 
            id="addComicAuthor" 
            type="text" 
            className="inputField" 
            placeholder="Add author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}/>

            <input 
            id="addComicPublisher" 
            type="text" 
            className="inputField" 
            placeholder="Add publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}/>

            <input 
            id="addComicReleased" 
            type="text" 
            className="inputField" 
            placeholder="Add year of release"
            value={released}
            onChange={(e) => setReleased(e.target.value)}/>

            <input 
            id="addComicImage" 
            type="text" 
            className="inputField" 
            placeholder="Add cover"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}/>
            </div>
            </main>
        <div className="flex justify-end">
        <div className="flex w-1/4 justify-between">
        <button id="closeModal" className="bg-red-900 w-24 rounded mr-4" onClick={() => setShowModal(false)}>Close</button>
        <button id="addComicButton" className="bg-green-900 w-24 rounded">Add</button>
        </div>
        </div>
        </div>
        </div> )}
        </>
    )
}