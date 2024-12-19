import React from "react";

const Profile = ({ NextPage }) => {
    return (
        <div className="text-center mt-12">
            <h1 className="text-3xl font-bold">Profile Page</h1>
            <button onClick={NextPage} className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Go to Landing Page</button>
        </div>
    );
};

export default Profile;
