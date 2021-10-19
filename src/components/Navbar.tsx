import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
   return (
      <div>
         <Link to={"/"} style={{ margin: "20px" }}>
            Home (Public)
         </Link>
         <Link to={"/about"} style={{ margin: "20px" }}>
            {" "}
            About (Public){" "}
         </Link>
         <Link to={"/profile"} style={{ margin: "20px" }}>
            Profile (Protected)
         </Link>
      </div>
   );
}

export default Navbar;
