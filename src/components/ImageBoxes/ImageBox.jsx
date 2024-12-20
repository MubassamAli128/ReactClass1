import React from "react";
import { DiAtom } from "react-icons/di";

const ImageBox=(data)=>{
    return (
        <div className={`${data.cls} text-white flex items-center justify-center` }>
            <DiAtom className="w-10 h-10" />
        </div>
    )
}


export default ImageBox;