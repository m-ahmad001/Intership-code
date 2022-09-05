import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const TestContext = createContext();

export default function TestContextProvider(props) {
  const myName = 'Ahmad'
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password.length < 6) {
      toast.warn("Password is less Then 6", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return
    }else{
      toast.success('🦄Registered SuccessFully', {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

    console.log(userName);
    console.log(password);
  };
  return (
    <div>
      <TestContext.Provider value={{myName, userName,setUserName,setPassword, password, handleSubmit}}>
        {props.children}
      </TestContext.Provider>
    </div>
  );
}
