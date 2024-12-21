import React from "react";
import Rings from "./Rings";
import Button from "../../components/ImageBoxes/button";

const LandingPage = ({ NextPage }) => {
    return (
        <>
            <Rings/>
            <div className="flex flex-col items-center justify-center text-center w-full">
                <h1 className="font-bold text-2xl p-8">Find a suitable job in seconds with our advanced search features🚀</h1>
                <p className="px-4 pb-4 text-sm">Explore thousands of exciting jobs from leading companies around the world. Lowceris your trusted partner in fnding jobs</p>
                <div className="w-full px-2">
                    <Button text="Submit a Proposal"/>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
