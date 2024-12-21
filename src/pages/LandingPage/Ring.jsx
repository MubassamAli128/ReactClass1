import React from "react";

const Ring=(props)=>{
    return (
        <div className={`absolute flex items-center justify-center rounded-full border border-dashed border-black ${props.w} ${props.h}`}>
        </div>
    )
}

export default Ring