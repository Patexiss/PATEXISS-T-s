import React from "react";
import blackT from "../assets/blackT.jpg";
import whiteT from "../assets/whiteT.jpg";
import nameBrand from "../assets/nameBrand.jpg";
import tubman20 from "../assets/tubman20.jpg";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" href="/home">
          PATEXISS T's
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
              Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <img
        src={nameBrand}
        alt="PATEXISS logo"
        title="back of shirt PATEXISS logo"
        width="10%"
        className="profile-image"
      />
      <br></br>
     
      <img
        src={blackT}
        alt="blackT-shirt with red letters and green leaf"
        title="A short sleeve black T-shirt that says just say yes with the letter A as a marijuana leaf"
        width="50%"
        className="profile-image"
      />
      <br></br>
     
      <img
        src={whiteT}
        alt="whiteT-shirt with red letters and green leaf"
        title="A short sleeve white T-shirt that says just say yes with the letter A as a marijuana leaf"
        width="50%"
        className="profile-image"
      />
      <br></br>
      <br></br>
      <br></br>

    <img
      src={tubman20}
      alt="Harriet Tubman $20 bill"
      title="price of shirt each"
      width="10%"
      className="money-image"
      />
    <h3>$20.00 each</h3>
    </div>
  );
}
