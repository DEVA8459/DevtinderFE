import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Login = () => {
  const navigate =useNavigate()
  const [emailId, setEmailId] = useState("Salman@gmail.com");
  const [password, setPassword] = useState("Salman@1234");
  const [error ,setError]=useState("")

  const dispatch =useDispatch()
 

  const handleLogin = async () => {
    
    try {
      const res = await axios.post(BASE_URL+"/login", {
        emailId,
        password,
      } ,{withCredentials :true});
      dispatch(addUser(res.data))
      return navigate("/")
    } catch (error) {
      setError(error?.response?.data)
      console.error("E",error);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body ">
          <h2 className="card-title justify center">Login</h2>
          <div>
            <label className="fieldset-label">Email :</label>
            <input
              type="email"
              name="email"
              className="input input-secondary mt-1"
              placeholder="Email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />

            <label className="fieldset-label mt-3 ">Password :</label>
            <input
              type="password"
              className="input mt-1 input-secondary"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-red-500">{error}</p>

          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
