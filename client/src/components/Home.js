import React from "react";

export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          aria-label="Toggle navigation"
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
    </div>
  );
}
//  <!-- <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <title>Patexiss's Profile</title>
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="stylesheet" href="styles.css">
//   <link href="https://fonts.googleapis.com/css?family=Muli%7CRoboto:400,300,500,700,900" rel="stylesheet"></head>
//   <body>

//     <div className="main-nav">
//         <ul className="nav">
//           <li className="name">Jane Smith</li>
//           <li><a href="#">Home</a></li>
//           <li><a href="resume.html">Experience</a></li>
//           <li><a href="#">Photos</a></li>
//           <li><a href="#">Contact</a></li>
//         </ul>
//     </div>

//     <header>
//       <img src="https://placeimg.com/400/400/people" alt="Drawing of Jane Smith" className="profile-image">
//       <h1 className="tag name">Hello, I’m Patexiss.</h1>
//       <p className="tag location">My home is Boston, MA.</p>
//     </header> -->
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>PATEXISS</title>
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">

//   <link rel="stylesheet" href="stylesheet.css">
//   <!-- <link href="https://fonts.googleapis.com/css?family=Muli%7CRoboto:400,300,500,700,900" rel="stylesheet"> -->
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <script src="https://kit.fontawesome.com/4fa3296de2.js" crossorigin="anonymous"></script>

// </head>

//   <body>
//     <!-- <i className="fad fa-cannabis"></i> -->
//     <h1 className="tag name">WELCOME TO</h1>
//     <img src="shirtpics/namebrand.jpg" alt="PATEXISS logo" title="back of shirt PATEXISS logo" width="10%" className="profile-image">
//     <h1 className="tag name">T's</h1>
//    <header>
//     <!-- <div className="row">
//             <div className="column"> -->
//               <img src="shirtpics/blackT.jpg" alt="blackTshirt with red letters and green leaf" title="A black T-shirt that says just say yes with the letter A as a marijuana leaf" style="width:25%" className="profile-image">
//             <!-- </div> -->

//             <!-- <div className="column"> -->
//               <img src="shirtpics/whiteT.jpg" alt="whiteTshirt with red letters and green leaf" title="A white T-shirt that says just say yes with the letter A as a marijuana leaf" style="width:25%;" className="profile-image"style="background-color:green"
//             >
//             <!-- </div>
//           </div> -->
//           <form name="form1" id="form1" method="post">
//           </header>

//           <!-- <div className="main-nav">
//         <ul className="nav">
//           <li className="name">Jane Smith</li>
//           <li><a href="#">Home</a></li>
//           <li><a href="resume.html">Experience</a></li>
//           <li><a href="#">Photos</a></li>
//           <li><a href="#">Contact</a></li>
//         </ul>
//     </div> -->

//               <p>
//                   <input type="text" name="num_text" id="num_text"/>
//                   <input type="button" name="Submit" value="Name" onclick="add_col();" />
//                 </p>
//             <p>
//               <input type="text" name="num_text" id="num_text"/>
//               <input type="button" name="Submit" value="Email" onclick="add_col();" />
//             </p>
//             <p>
//                 <input type="text" name="num_text" id="num_text"/>
//                 <input type="button" name="Submit" value="Password" onclick="add_col();" />
//               </p>
//             <p>
//               <input type="text" name="num_text" id="num_text"/>
//               <input type="button" name="Submit" value="Register" onclick="add_col();" />
//             </p>
//             <p>&nbsp;</p>
//             <p>
//               <input type="text" name="num_text" id="num_text"/>
//               <input type="button" name="Submit" value="Review Order" onclick="add_col();" />

//   </p>
//             <p>&nbsp;</p>
//             <p>
//               <input type="text" name="num_text" id="num_text"/>
//               <input type="button" name="Submit" value="Contact Us" onclick="add_col();" />
//             </p>
//             <p>&nbsp;</p>

// <footer>
//   <!-- <i className="fad fa-cannabis"></i> -->

// &copy;PATEXISS/CATERD</footer>

//   </body>
// </html>
