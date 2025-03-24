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
    <div className="h-[80vh] flex flex-wrap justify-center gap-8  py-5 overflow-auto">
      {data && data.length > 0
        ? data.map((items) => (
            <div
              key={items?.user?._id}
              className="items-center  card   border-2  shadow-xl shadow-black "
            >
              <UserCard data={items.user} />

              <div className="font-bold text-2xl flex justify-center gap-4 bg-black/50 w-full ">
                Status: <p className="text-2xl text-red-600">{items.status}</p>
                <button
                  className=" bg-green-700 p-2 rounded-xl  text-xl"
                  onClick={() => handleRemove(items?.user?._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        : "No rejected or ignored users"}
    </div>
  );
};

export default IngoreReject;
