import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

export default function Login() {
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
      return;
    }
    console.log(userName);
    console.log(password);
  };
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
                      placeholder="Enter Your Name"
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <input
                      type="password"
                      className="form-control bg-transparent border border-dark"
                      placeholder="Enter Your Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col"><button className="btn btn-success w-100 my-3" type="submit">
                      Login
                      <ToastContainer />
                    </button></div>
                  <div className="col"><button className="btn btn-success w-100 my-3" type="submit">
                      Forget Password
                      <ToastContainer />
                    </button></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
