import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./../hooks/useAuth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
   const { authed } = useAuth();

   return (
      <Route
         {...rest}
         render={(props) => {
            if (authed) {
               return <Component {...rest} {...props} />;
            } else {
               return (
                  <Redirect
                     to={{
                        pathname: "/",
                        state: {
                           from: props.location,
                        },
                     }}
                  />
               );
            }
         }}
      />
   );
};

export default ProtectedRoute;
