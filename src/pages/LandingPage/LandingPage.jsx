import React from "react";
import Rings from "./Rings";

const LandingPage = ({ goToNextPage }) => {
  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl font-bold">Landing Page</h1>
      <Rings/>
      <button
        onClick={goToNextPage}
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Home
      </button>
    </div>
  );
};

export default LandingPage;
