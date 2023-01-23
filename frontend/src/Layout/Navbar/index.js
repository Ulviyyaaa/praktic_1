import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function Navbar() {
  return (
    <>
      <div className="mainNav">
        <div className="navGo">
          <div className="navLogo">
            <h3>Notary</h3>
          </div>
          <div className="navLi">
            <Link className="navLiOne" to={"/"}>Home</Link>
            <Link className="navLiOne" to={"/add"}>Add</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
