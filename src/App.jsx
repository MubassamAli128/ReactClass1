import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

const App = () => {
  const showPage = (page) => {
    document.querySelectorAll(".page").forEach((pag) => (pag.style.display = "none"));
    document.getElementById(page).style.display = "block";
  };

  return (
    <div>
      <div id="LandingPage" className="page block">
        <LandingPage NextPage={() => showPage("Home")} />
      </div>
      <div id="Home" className="page hidden">
        <Home NextPage={() => showPage("Profile")} />
      </div>
      <div id="Profile" className="page hidden">
        <Profile NextPage={() => showPage("LandingPage")} />
      </div>
    </div>
  );
};

export default App;
