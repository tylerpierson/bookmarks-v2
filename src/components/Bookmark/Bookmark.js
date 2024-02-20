import { useRef, useState } from 'react'

export default function Bookmark({
    bookmark,
    updateBookmark,
    deleteBookmark
}){
    const [showInput, setShowInput] = useState(false)
    const inputRef = useRef(null)
    return(
        <>
            <li>
                <h4 onClick={() => setShowInput(!showInput)}>{bookmark.title}</h4>
                <input 
                    ref={inputRef}
                    style={{ display: showInput ? 'block': 'none' }}
                    type="text"
                    onKeyDown={(e) => {
                        if(e.key === 'Enter'){
                            const title = inputRef.current.value
                            updateBookmark(bookmark._id, { title })
                        }
                    }}
                    defaultValue={bookmark.title}
                />
                <a href={bookmark.url} target="_blank">{bookmark.url}</a>
            </li>
        </>
    )
}