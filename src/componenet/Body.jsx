import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData?.id) return; // Prevent unnecessary API calls

    try {
      const response = await axios.get(`${BASE_URL}/profile/view`, {
        withCredentials: true, // Ensure credentials are sent
      });

      if (!response.data) {
        console.warn("No user data received.");
        return;
      }

      console.log("Profile fetched:", response.data);
      dispatch(addUser(response.data));
    } catch (error) {
      if (error.response) {
        console.error("Error Response:", error.response.data);

        if (error.response.status === 401) {
          console.warn("User not authenticated. Redirecting to login...");
          navigate("/login");
        }
      } else if (error.request) {
        console.error("No response from server:", error.request);
      } else {
        console.error("Unexpected error:", error.message);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []); // Runs once on component mount

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;
