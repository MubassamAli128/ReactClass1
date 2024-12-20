import React from "react";
import ImageBox from "../../components/ImageBoxes/ImageBox";

const Rings=()=>{
    return(
        <div className="relative flex items-center justify-center w-screen h-[400px] overflow-hidden" >
                <div className="absolute flex items-center justify-center rounded-full border border-dashed border-black w-full h-full">
                    <div className="absolute flex items-center justify-center rounded-full border border-dashed border-black h-[80%] w-[80%]">
                        <div className="absolute flex items-center justify-center rounded-full border border-dashed border-black h-[70%] w-[70%]">
                            <div className="absolute flex items-center justify-center rounded-full border border-dashed border-black h-[60%] w-[60%]">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-full flex items-center justify-center">
                    <ImageBox cls='w-20 h-20 bg-blue-400 rounded-lg animate-pulse'/>
                    <ImageBox cls='absolute top-[100px] right-[30px] w-[50px] h-[50px] bg-green-400 rounded-lg animate-pulse'/>
                    <ImageBox cls='absolute top-[30px] left-[100px] w-[50px] h-[50px] bg-red-400 rounded-lg animate-pulse'/>
                    <ImageBox cls='absolute bottom-[100px] left-[30px] w-[50px] h-[50px] bg-blue-400 rounded-lg animate-pulse'/>
                    <ImageBox cls='absolute bottom-[100px] right-[50px] w-[50px] h-[50px] bg-purple-400 rounded-lg animate-pulse'/>
                </div>
        </div>
    )
}


export default Rings;