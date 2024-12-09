import Icon from '@mdi/react'
import { mdiStar } from "@mdi/js"

export default function ReviewSection () {
    return (
    <div className="mt-5 bgGrey">
        <div id="topDiv" className="p-2 w-full flex justify-between">
        <div id="topLeft">Anton</div>
        <div id="topMid" className='flex'>5/5 <Icon path={mdiStar} size={1} /></div>
        <div id="topRight" ></div>
        </div>
        <div id="bottomDiv" className="p-2">
        This was a good one. This was a good one. This was a good one. This was a good one. This was a good one. This was a good one. This was a good one. This was a good one. This was a good one. This was a good one. This was a good one. This was a good one. This was a good one. This was a good one. 
        </div>
        <div>

        </div>
    </div>
    )
}