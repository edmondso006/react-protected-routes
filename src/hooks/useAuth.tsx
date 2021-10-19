import React, { useState, createContext, useContext, useEffect } from "react";

// Create the context
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
   // const sessionStorageValue = JSON.parse(sessionStorage.getItem("loggedIn"));

   // const [authed, setAuthed] = useState<boolean>(sessionStorageValue);
   const [authed, setAuthed] = useState<boolean>(false);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      if (!authed) {
         fakeAsyncLoginCheck().then((activeUser) => {
            if (activeUser) {
               console.log("fake async login check called");
               setAuthed(true);
               setLoading(false);
            } else {
               setLoading(false);
            }
         });
      }
   }, []);

   const login = async (): Promise<void> => {
      const result = await fakeAsyncLogin();

      if (result) {
         console.log("user has logged in");

         setAuthed(true);
         // sessionStorage.setItem("loggedIn", "true");
      }
   };

   const logout = async (): Promise<void> => {
      const result = await fakeAsyncLogout();

      if (result) {
         console.log("The User has logged out");
         setAuthed(false);
         // sessionStorage.setItem("loggedIn", "false");
      }
   };

   /// Mock Async Login API call.
   // TODO: Replace with your actual login API Call code
   const fakeAsyncLogin = async (): Promise<string> => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve("Logged In");
         }, 300);
      });
   };

   // Fixes the reload issue
   const fakeAsyncLoginCheck = async (): Promise<boolean> => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(true);
         }, 300);
      });
   };

   // Mock Async Logout API call.
   // TODO: Replace with your actual logout API Call code
   const fakeAsyncLogout = async (): Promise<string> => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve("The user has successfully logged on the server");
         }, 300);
      });
   };

   return (
      // Using the provider so that ANY component in our application can
      // use the values that we are sending.
      <AuthContext.Provider
         value={{ authed, setAuthed, login, logout, loading }}
      >
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);
