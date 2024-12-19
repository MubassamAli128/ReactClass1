import React from "react";

const Home = ({ goToNextPage }) => {
  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <button
        onClick={goToNextPage}
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Profile
      </button>
    </div>
  );
};

export default Home;
