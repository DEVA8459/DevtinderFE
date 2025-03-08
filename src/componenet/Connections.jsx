import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import { addconnection ,removeConnection} from "../store/connectionSlice";
import { useDispatch, useSelector } from "react-redux";

const Connections = () => {
  const connection = useSelector((store) => store.connection)
  console.log(connection)
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

  if (!connection) {
    <p>No connction requests</p>;
  }
  const handleRemove = async (userId) => {
    try {
      await axios.delete(`${BASE_URL}/user/connection/${userId}`, {
        withCredentials: true,
      });
  
      dispatch(removeConnection(userId)); // Remove from Redux store
    } catch (error) {
      console.error("Failed to delete from DB:", error);
    }
  };
  return (
    <div className="flex justify-center flex-wrap">
      {connection &&
        connection.map((con) => (
          <div
            key={con._id}
            className="flex flex-col justify-center items-center  p-2 border-2 border-black m-2 rounded-lg bg-base-300  w-3/5 "
          >
            <img
              src={con.photoUrl}
              alt="profile"
              className="w-80 h-90  border-2 border-black rounded-2xl"
            />
            <p className="text-2xl font-extrabold text-white font-mono p-2 m-3 ">
              {con.firstName + "  " + con.lastName}
            </p>

            <button className="bg-green-500 p-2 m-3 rounded-lg w-30 text-xl font-bold text-black">
              chat
            </button>
            <button
              onClick={() =>handleRemove(con._id)}
              className="bg-red-500 p-2 m-3 rounded-lg w-30 text-xl font-bold text-black"
            >
              Remove connection
            </button>
          </div>
        ))}
    </div>
  );
};

export default Connections;
