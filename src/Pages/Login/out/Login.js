import React from "react";
import { useState, useContext } from "react";
import { TestContext } from "../../../context/TestContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

export default function Login() {
  const { myName , userName,setUserName,setPassword, password,handleSubmit } = useContext(TestContext);
  
  
  return (
    <div className="py-5 vh-100 flogin">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <div className="card p-4">
              <h2 className="text-center text-white">Login Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="row mb-2">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control bg-transparent border border-dark "
                      placeholder="Enter Your Name"c
                      onChange={(e)=>{setUserName(e.target.value)}}
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <input
                      type="password"
                      className="form-control bg-transparent border border-dark"
                      placeholder="Enter Your Password"
                      onChange={(e)=>{setPassword(e.target.value)}}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <button
                      className="btn btn-success w-100 my-3"
                      type="submit"
                    >
                      Login
                      <ToastContainer />
                    </button>
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-success w-100 my-3"
                      type="submit"
                    >
                      {myName}
                      <ToastContainer />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
