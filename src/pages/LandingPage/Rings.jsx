import React from "react";
import ImageBox from "../../components/ImageBoxes/ImageBox";
import { DiAtom } from "react-icons/di";
import Ring from "./Ring";
import { IoLogoAppleAr } from "react-icons/io5";
import { BiLogoFirebase, BiLogoFlutter, BiLogoGitlab, BiLogoMagento } from "react-icons/bi";

const Rings=()=>{
    return(
        <div className="relative flex items-center justify-center w-screen h-[400px] overflow-hidden" >
            <Ring w="w-full" h="h-full"/>
            <Ring w="w-[80%]" h="h-[80%]"/>
            <Ring w="w-[60%]" h="h-[60%]"/>
            <Ring w="w-[40%]" h="h-[40%]"/>
            <div className="relative w-full h-full flex items-center justify-center">
                <ImageBox cls='w-20 h-20 bg-blue-400 rounded-lg animate-pulse'>
                    <IoLogoAppleAr className="w-10 h-10" />
                </ImageBox>
                <ImageBox cls='absolute top-[100px] right-[30px] w-[50px] h-[50px] bg-green-400 rounded-lg animate-pulse'>
                    <BiLogoFirebase className="w-10 h-10" />
                </ImageBox>
                <ImageBox cls='absolute top-[30px] left-[100px] w-[50px] h-[50px] bg-red-400 rounded-lg animate-pulse'>
                    <BiLogoFlutter className="w-10 h-10" />
                </ImageBox>
                <ImageBox cls='absolute bottom-[100px] left-[30px] w-[50px] h-[50px] bg-blue-400 rounded-lg animate-pulse'>
                    <BiLogoGitlab className="w-10 h-10" />
                </ImageBox>
                <ImageBox cls='absolute bottom-[100px] right-[50px] w-[50px] h-[50px] bg-purple-400 rounded-lg animate-pulse'>
                    <BiLogoMagento className="w-10 h-10" />
                </ImageBox>
            </div>
        </div>
    )
}


export default Rings;