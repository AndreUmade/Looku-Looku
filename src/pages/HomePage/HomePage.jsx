import React from "react";
import "./homepage.css";

const HomePage = () => {
  return (
    <div className="home_main">
      <div className="home_sidenave">
        <div className="home_navs">
          <div className="">
            <div className="">
              <img src={""} />
              <p></p>
            </div>
          </div>
        </div>
        <img
          className="home_logo"
          src={process.env.PUBLIC_URL + ".svg"}
          alt="logo"
        />
      </div>
    </div>
  );
};
export default HomePage;
