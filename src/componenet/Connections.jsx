import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import { addconnection, removeConnection } from "../store/connectionSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";

import Chat from "./Chat";
import { MdOutlineDelete } from "react-icons/md";

const Connections = () => {
  const connection = useSelector((store) => store.connection);

  const [selectedChat, setSelectedChat] = useState(null);

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

  const handleCLick = (con) => {
    
  setSelectedChat(null);
  
  // Using a small delay with useEffect for better reactivity
  setTimeout(() => {
    
    setSelectedChat(con);
  }, 50); 
  };

  return (
    <div className="flex p-3 ">
      <div className=" flex-col  gap-4 w-2/5 md:w-2/5 h-[90vh] overflow-auto">
        {connection.map((con) => {
          const modalId = `modal_${con._id}`;
          return (
            <div
              key={con._id}
              className="md:flex   md:p-3 m-2 md:m-4 bg-gradient-to-r from-rose-500 to-pink-700 rounded-xl md:py-2  sm:w-[60vh] shadow-xl shadow-black transition-transform transform hover:scale-105  relative z-10  "
            >
              <div
                className={`flex-col gap-4 items-center justify-between p-2 w-[100%] cursor-pointer text-lg rounded-xl  font-bold ${
                  selectedChat?._id === con._id
                    ? "bg-pink-800"
                    : "hover:bg-rose-500"
                }`}
                onClick={() => handleCLick(con)}
              >
                <div className="lg:flex  gap-3 items-center justify-between">
                  <img
                    src={con.photoUrl}
                    alt="profile"
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                    onClick={() => document.getElementById(modalId).showModal()}
                  />
                  <p className="flex">
                    {con.firstName} {con.lastName}
                  </p>
                  <button onClick={() => handleRemove(con._id)}>
                    <MdOutlineDelete size={40} />
                  </button>
                </div>
                <div></div>
              </div>

              <div className="flex flex gap-3 mt-4">
                <dialog
                  id={modalId}
                  className="modal backdrop-blur-sm bg-opacity-50"
                >
                  <div className="modal-box w-11/12 max-w-4xl p-6  rounded-lg shadow-xl bg-gradient-to-l from-rose-500 to-pink-700/70">
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn bg-gray-700 right-1/2 rounded-lg shadow-md hover:bg-gray-400 transition absolute top-2">
                          Close
                        </button>
                      </form>
                    </div>
                    <ProfileCard user={con} />
                  </div>
                </dialog>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between w-[100%] md:w-[60%] h-[85vh] bg-black/50 rounded-xl m-3 shadow-2xl shadow-black  ">
        {selectedChat ? (
          <Chat Chat={selectedChat} />
        ) : (
          <p>selcet chat to start messaging</p>
        )}
      </div>
    </div>
  );
};

export default Connections;
