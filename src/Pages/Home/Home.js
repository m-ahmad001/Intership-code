import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TestContext } from "../../context/TestContext";
import "../Home/home.css";

export default function Home() {
  const { myName,userName, password } = useContext(TestContext);
  return (
    <div className="py-5 hpage vh-100">
      <div className="container  w-50 text-center shadoww py-5">
        <h2>Hello {userName}! </h2>
        <p>Your Password iS {password}</p>
      <Link to='/login' className="btn btn-success">Login</Link>
      </div>
    </div>
  );
}
