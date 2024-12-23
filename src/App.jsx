import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";


const App = () => {

  let page = "Home";


  return (
    <div>
      {
        page ==="LandingPage"? 
        <LandingPage />
        :
        page ==="Home"? 
        <Home />
        :
        <Profile />
      }
    </div>
  );
};

export default App;
