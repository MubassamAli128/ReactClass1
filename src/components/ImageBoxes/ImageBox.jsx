import React from "react";


const ImageBox=(data)=>{
    return (
        <div className={`${data.cls} text-white flex items-center justify-center` }>
            {data.children}
        </div>
    )
}


export default ImageBox;