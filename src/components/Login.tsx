import React from "react";
import { useAuth } from "../hooks/useAuth";

function Login() {
   const { login } = useAuth();

   return (
      <div style={{ margin: "20px" }}>
         <button onClick={login}>Login</button>
      </div>
   );
}

export default Login;
