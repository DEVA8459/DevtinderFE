import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import { addconnection, removeConnection } from "../store/connectionSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";

const Connections = () => {
  const connection = useSelector((store) => store.connection);
  const dispatch = useDispatch();

  const getConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connection", {
        withCredentials: true,
      });

      dispatch(addconnection(res.data?.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getConnection();
  }, []);

  if (!connection || connection.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10 text-lg">
        No connection requests
      </p>
    );
  }

  const handleRemove = async (userId) => {
    try {
      await axios.delete(`${BASE_URL}/user/connection/${userId}`, {
        withCredentials: true,
      });

      dispatch(removeConnection(userId));
    } catch (error) {
      console.error("Failed to delete from DB:", error);
    }
  };

  return (
    <div className="bg-linear-to-l from-rose-500 to-pink-700/70 h-[100vh]">
    <div className="p-4 flex flex-col items-center flex-wrap gap-4 ">
      {connection.map((con) => {
        const modalId = `modal_${con._id}`;
        return (
          <div
            key={con._id}
            className="flex flex-col bg-gradient-to-r from-rose-500 to-pink-700 rounded-xl p-4 w-full sm:w-[40vh] shadow-xl shadow-black transition-transform transform hover:scale-105"
          >
            <div className="flex gap-4 items-center">
              <img
                src={con.photoUrl}
                alt="profile"
                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
              />
              <p className="text-lg font-bold">
                {con.firstName} {con.lastName}
              </p>
            </div>

            <div className="flex flex gap-3 mt-4">
              <button className="bg-green-700 px-4 py-2 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
                Chat
              </button>
              <button
                onClick={() => handleRemove(con._id)}
                className="bg-red-900 px-4 py-2 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
              >
                Remove
              </button>

              <button
                className="bg-blue-800 px-4 py-2 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
                onClick={() => document.getElementById(modalId).showModal()}
              >
                Profile
              </button>

              <dialog
                id={modalId}
                className="modal backdrop-blur-sm bg-opacity-50"
              >
                <div className="modal-box w-11/12 max-w-4xl p-6  rounded-lg shadow-xl bg-gradient-to-l from-rose-500 to-pink-700/70">
                <div className="modal-action">
                    <form method="dialog">
                      <button className="btn bg-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400 transition">
                        Close
                      </button>
                    </form>
                  </div><ProfileCard user={con} />
                  
                </div>
              </dialog>
            </div>
          </div>
        );
      })}
    </div></div>
  );
};

export default Connections;
