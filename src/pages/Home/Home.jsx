import React from "react";
import { DiAtom } from "react-icons/di";
import { IoMdNotificationsOutline } from "react-icons/io";
import image from '../../assets/images/profile.jpg';
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";
import Button from "../../components/ImageBoxes/button";
import ImageBox from "../../components/ImageBoxes/ImageBox";
import { FcApproval } from "react-icons/fc";
const Home = ({ NextPage }) => {
    return (
        <>
            <div className="flex items-center justify-between p-2">
                <div className="flex items-center justify-center gap-1">
                    <DiAtom className="w-8 h-8 text-blue-500" />
                    <p className="font-semibold">Lowcer</p>
                </div>
                <div className="flex items-center justify-center gap-1">
                    <IoMdNotificationsOutline className="w-6 h-6"/>
                    <img className="w-10 h-10 rounded-full" src={image} alt="" />
                </div>
            </div>
            <div className="px-2 w-full">
                <div className="relative w-full bg-gray-200 rounded-full p-2 flex items-center gap-1 border border-gray-300">
                    <input type="text" name="" id="" className="pl-2 w-full bg-transparent border border-none outline-none" placeholder="Search type job"/>
                    <CiSearch className="bg-white w-8 h-8 p-2 rounded-full"/>
                </div>
            </div>
            <div className="flex items-center justify-between w-full gap-5 mt-5 px-2">
                <div className="relative w-full bg-gray-200 rounded-full p-2 flex items-center gap-1 border border-gray-300">
                    <input type="text" name="" id="" className="pl-2 w-full bg-transparent border border-none outline-none" placeholder="Job type.."/>
                    <HiOutlineShoppingBag className="bg-white w-8 h-8 p-2 rounded-full"/>
                </div>
                <div className="relative w-full bg-gray-200 rounded-full p-2 flex items-center gap-1 border border-gray-300">
                    <input type="text" name="" id="" className="pl-2 w-full bg-transparent border border-none outline-none" placeholder="Location..."/>
                    <GrLocation className="bg-white w-8 h-8 p-2 rounded-full"/>
                </div>
            </div>
            <div className="flex items-center justify-center px-2 mt-5">
                <Button onClick={NextPage} text="Search" w="w-full"/>
            </div>
            <div className="bg-gray-300 rounded-2xl w-full px-2 pt-2 flex flex-col items-center gap-2 mt-5">
                <div className="flex items-center justify-center gap-2 bg-white rounded-full py-2 px-2 text-xs">
                    <div className="py-1 px-2 hover:bg-black hover:text-white rounded-full">Recent Jobs</div>
                    <div className="py-1 px-2 hover:bg-black hover:text-white rounded-full">Popular Jobs</div>
                    <div className="py-1 px-2 hover:bg-black hover:text-white rounded-full">Adobe photoshop</div>
                </div>
                <div className="bg-white rounded-xl px-2 py-2 w-full flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <ImageBox cls='w-[50px] h-[50px] bg-orange-400 rounded-lg'/>
                        <div className="flex flex-col justify-center gap-1">
                            <p className="font-bold text-md">Create Packaging Design for...</p>
                            <p className="text-xs">Fireart Studio</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="px-3 rounded-md bg-gray-300">Figma</div>
                        <div className="px-3 rounded-md bg-gray-300">Branding</div>
                        <div className="px-3 rounded-md bg-gray-300">Adobe Photoshop</div>
                    </div>
                    <div className="flex items-center justify-between">
                        
                    </div>
                </div>
            </div>
        </>
        // <div className="text-center mt-12">
        //     <h1 className="text-3xl font-bold">Home Page</h1>
        //     <button onClick={NextPage} className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Go to Profile</button>
        // </div>
    );
};

export default Home;


// public/profil.jpg

// ./