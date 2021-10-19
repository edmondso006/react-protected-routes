import React from "react";
import { useAuth } from "../hooks/useAuth";

function Logout() {
   const { logout } = useAuth();

   return (
      <div style={{ margin: "20px" }}>
         <button onClick={logout}>Logout</button>;
      </div>
   );
}

export default Logout;
