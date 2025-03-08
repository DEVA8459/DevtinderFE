import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import { clearRequest, setRequest } from "../store/requestSlice";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";

const Request = () => {
  const data = useSelector((store) => store.request) || [];
  const [showToast, setShowToast] = useState(false);
  const [resText, setResText] = useState("");

  const dispatch = useDispatch();

  const getRequest = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/requests/received`, {
        withCredentials: true,
      });
      dispatch(setRequest(response.data?.data || []));
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  const handleUser = async (id, status) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/review/${status}/${id}`,
        {},
        { withCredentials: true }
      );
      dispatch(clearRequest(id));
      setShowToast(true);
      setResText(res.data?.message || "Action successful");

      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (error) {
      console.error("Error handling user request:", error);
      setShowToast(true);
      setResText("Failed to process request.");
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  };

  return (
    <div className="flex relative flex-wrap gap-4 items-center justify-center mt-4">
      {data.length > 0 ? (
        data.map((requestData) => (
          <div
            className="items-center justify-center card bg-base-300 shadow-xl"
            key={requestData?._id}
          >
            <UserCard data={requestData?.fromUserId} />
            <div className="card-actions">
              <button
                className="btn btn-secondary"
                onClick={() => handleUser(requestData._id, "accepted")}
              >
                Accept
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handleUser(requestData._id, "rejected")}
              >
                Reject
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-lg font-bold">No new requests.</p>
      )}

      {showToast && (
        <div className="toast toast-center toast-middle">
          <div className="alert alert-info">
            <span>{resText}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Request;
