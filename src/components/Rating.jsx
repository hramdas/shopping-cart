import React from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

export const Rating = ({rating, onclick, style}) => {
  return (
    <>
    {
        [...Array(5)].map((_, i)=>(
            <span key={i} onClick={()=>onclick(i)} style={style}>
                {rating > i ? (
                    <AiFillStar fontSz="15px"/>
                ) : (
                    <AiOutlineStar fontSz="15px" />
                )
            }
            </span>
        ))
    }
    </>
  )
}
