import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedin, setISloggedIn] = useState(true);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (error) {
      setError(error?.response?.data);
      console.error("E", error);
    }
  };
  const handleguest = () => {
    setEmailId("katrinakaif@gmail.com");
    setPassword("Katrina@1234");
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data?.data));
      return navigate("/profile");
    } catch (error) {
      setError(error?.response?.data);
      console.error("Error", error);
    }
  };
  return (
    <div className="h-[100vh] ">
       <div className="flex justify-center py-10 ">
      <div className=" card-border   w-80 bg-linear-to-b from-rose-500 to-pink-700 shadow-lg shadow-black rounded-lg">
        <div className="card-body  ">
          <h2 className="card-title justify-center text-xl font-bold shadow-sm ">
            {isLoggedin ? "Login" : "Signup"}
          </h2>
          <div>
            {!isLoggedin && (
              <div>
                <label className="fieldset-label mt-3 text-white font-bold text-lg ">
                  First Name :
                </label>
                <input
                  type="text"
                  className="input mt-1 border-black input-secondary bg-linear-to-bl from-violet-500/20 to-fuchsia-500/40 shadow-md shadow-black"
                  placeholder="Password"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label className="fieldset-label mt-3 text-white font-bold text-lg ">
                  Last Name :
                </label>
                <input
                  type="text"
                  className="input mt- border-black input-secondary bg-linear-to-bl from-violet-500/20 to-fuchsia-500/40 shadow-md shadow-black"
                  placeholder="Password"
                  value={lastName}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            )}
            <label className="fieldset-label text-white font-bold text-lg mt-3">
              Email :
            </label>
            <input
              type="email"
              name="email"
              className="input input-secondary mt-1 border-black bg-linear-to-bl from-violet-500/20 to-fuchsia-500/40 shadow-md shadow-black"
              placeholder="Email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />

            <label className="fieldset-label mt-3 text-white font-bold text-lg ">
              Password :
            </label>
            <input
              type="password"
              className="input mt-1 input-secondary border-black bg-linear-to-bl from-violet-500/20 to-fuchsia-500/40 shadow-md shadow-black"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-red-500">{error}</p>

          <div className="card-actions justify-center">
            <button
              className="btn btn-primary shadow-md shadow-black font-bold"
              onClick={isLoggedin ? handleLogin : handleSignup}
            >
              {isLoggedin ? "Login" : "Signup"}
            </button>
            <button
              className="btn btn-primary shadow-md shadow-black font-bold"
              onClick={handleguest}
            >
              Guest Credentials
            </button>
            <span
              onClick={() => setISloggedIn(!isLoggedin)}
              className="font-bold"
            >
              {isLoggedin
                ? "new to tinder ? please signup"
                : "already signup ! loging-in"}
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Login;
