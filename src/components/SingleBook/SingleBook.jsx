import { useState } from "react"
import CommentArea from "../CommentArea/CommentArea"

export default function SingleBook({book}) {

    const [selected, setSelected] = useState(false)

    return (
        <>
            <img 
                src={book.img} 
                style={{ width: "200px", height: "300px", objectFit: "fill", border: selected ? '5px solid red' : ''}} 
                alt={book.title} 
                onClick={() => {
                    setSelected(!selected)
            }}/>
            {selected ? <CommentArea/> : ''}
        </>
    )
}