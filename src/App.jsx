import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

const App = () => {
  const showPage = (page) => {
    document.querySelectorAll(".page").forEach((el) => (el.style.display = "none"));
    document.getElementById(page).style.display = "block";
  };

  return (
    <div>
      <div id="LandingPage" className="page" style={{ display: "block" }}>
        <LandingPage goToNextPage={() => showPage("Home")} />
      </div>
      <div id="Home" className="page" style={{ display: "none" }}>
        <Home goToNextPage={() => showPage("Profile")} />
      </div>
      <div id="Profile" className="page" style={{ display: "none" }}>
        <Profile goToNextPage={() => showPage("LandingPage")} />
      </div>
    </div>
  );
};

export default App;
