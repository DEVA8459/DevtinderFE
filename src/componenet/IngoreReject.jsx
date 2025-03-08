import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  addIgnoreReject,
  removeIgnoreReject,
} from "../store/ignoreRejectSlice";
import UserCard from "./UserCard";

const IngoreReject = () => {
  const data = useSelector((store) => store.ingoreReject);
  const dispatch = useDispatch();

  console.log(data);

  const getIgnoreReject = async () => {
    try {
      const res = await axios.get(
        BASE_URL + `/user/connection/ignore&Rejected`,
        { withCredentials: true }
      );

      dispatch(addIgnoreReject(res.data?.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getIgnoreReject();
  }, []);
  
  const handleRemove = async (userId) => {
    try {
      await axios.delete(`${BASE_URL}/user/connection/${userId}`, {
        withCredentials: true,
      });
  
      dispatch(removeIgnoreReject(userId)); // Remove from Redux store
    } catch (error) {
      console.error("Failed to delete from DB:", error);
    }
  };
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {data &&
        data.map((items) => (
          <div
            key={items?.user?._id}
            className="items-center justify-center card bg-base-300 shadow-xl p-3"
          >
            <UserCard data={items.user} />

            <div className="font-bold text-2xl flex items-center gap-2">
              Status: <p className="text-2xl text-red-600">{items.status}</p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => handleRemove(items?.user?._id)}
            >
              Remove
            </button>
          </div>
        ))}
    </div>
  );
};

export default IngoreReject;
