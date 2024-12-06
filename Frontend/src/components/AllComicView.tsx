import { useState, useEffect } from 'react'
import { GetComic } from '../../../Interfaces/SharedInterfaces'
import { Icon } from '@mdi/react'
import { mdiCommentOutline } from '@mdi/js';

export default function AllComicView  ()  {
const [allComics, setAllComics] = useState<GetComic[]>([])

    useEffect (() =>{
        fetch('http://localhost:3000/comics')
        .then((respone) => respone.json())
        .then((data) => setAllComics(data))
    }, [])
    
    return (
        <>
        <div id="canvas">
            <div id="topDiv">

            </div>
            <main id="mainDiv" className="flex flex-col w-full items-center">
            <p className='border-b w-full pt-5 mb-5'></p>
                {allComics.length ? (
                    [...allComics].reverse().map((com) => (
                        <div key={com.id} className='w-[60%] flex flex-col mb-10'>
                            <div id="bigSide" className='flex'>
                            <div id="leftSide" className='w-[40%]'>
                                <img src={com.imagecover} className='w-64'/>
                            </div>
                            <div id="rightSide" className='w-[60%]'>
                                <div className='flex justify-between'>
                                <h1>{com.title} #{com.issue}</h1>
                                <span className='flex'>

                                <Icon path={mdiCommentOutline} size={1}/>
                                </span>
                                </div>
                                <p className='border-b w-full pt-2 mb-5'></p>
                                <p>Writer: {com.author}</p>
                                <p>Publisher: {com.publisher}</p>
                                <p>Released: {com.released}</p>
                                <p className='mt-10'>{com.description}</p>
                            </div>
                            </div>
                            <p className='border-b w-full pt-5 mb-5'></p>
                        </div>
                    ))
                ) : (
                    <p>Can't find any comics :(</p>
                )}
                <p className='border-b w-full pt-5 mb-5'></p>
            </main>
            <div id="bottomDiv">

            </div>
        </div>
        </>
    )
}