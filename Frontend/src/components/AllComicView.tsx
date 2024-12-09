import { useState, useEffect } from 'react'
import { GetComic } from '../../../Interfaces/SharedInterfaces'
import { Icon } from '@mdi/react'
import { mdiCommentOutline } from '@mdi/js';
import ReviewSection from './ReviewSection';

export default function AllComicView  ()  {
const [allComics, setAllComics] = useState<GetComic[]>([])
const [reviewClicked, setReviewClicked] = useState(false)

const ToggleComments = () => {
    return setReviewClicked(!reviewClicked)
}

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
                {allComics.length ? (
                    [...allComics].reverse().map((com) => (
                        <div key={com.id} className='w-[60%] flex flex-col mb-10'>
                            <div id="bigSide" className='flex'>
                            <div id="leftSide" className='w-[40%]'>
                                <img src={com.imagecover} className='w-64'/>
                            </div>
                            <div id="rightSide" className='w-[60%]'>
                                <div className='flex justify-between'>
                                <h1 id='title'>{com.title} #{com.issue}</h1>

                                <span className='flex hover' id='togglecomments' onClick={() => ToggleComments()}>
                                    See review {' '}
                                <Icon path={mdiCommentOutline} size={1} />
                                </span>

                                </div>
                                <p className='border-b w-full pt-2 mb-5'></p>
                                <p id='writer'>Writer: {com.author}</p>
                                <p id='publisher'>Publisher: {com.publisher}</p>
                                <p id='released'>Released: {com.released}</p>
                                <p className='mt-10'>{com.description}</p>
                            </div>
                            </div>
                            { reviewClicked && <ReviewSection />}
                            <p className='border-b w-full pt-5 mb-5'></p>
                        </div>
                    ))
                ) : (
                    <p>Can't find any comics :(</p>
                )}
                
                
            </main>
            <div id="bottomDiv">

            </div>
        </div>
        </>
    )
}