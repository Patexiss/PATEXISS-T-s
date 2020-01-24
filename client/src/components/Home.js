import React from "react";
import blackT from "../assets/blackT.jpg";
import whiteT from "../assets/whiteT.jpg";
import nameBrand from "../assets/nameBrand.jpg";

export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          PATEXISS T's
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          // aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <br></br>

      
      <img
        src={nameBrand}
        alt="PATEXISS logo"
        title="back of shirt PATEXISS logo"
        width="10%"
        className="profile-image"
      />
      <br></br>
      <br></br>


      <img
        src={blackT}
        alt="blackT-shirt with red letters and green leaf"
        title="A black T-shirt that says just say yes with the letter A as a marijuana leaf"
        width="25%"
        className="profile-image"
      />
      <br></br>
      <br></br>
      <br></br>

      <img
        src={whiteT}
        alt="whiteT-shirt with red letters and green leaf"
        title="A white T-shirt that says just say yes with the letter A as a marijuana leaf"
        width="25%"
        className="profile-image"
       
      />
    </div>
  );
}
