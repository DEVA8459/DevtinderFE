import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { addFeed, removeFromFeed } from "../store/feedSlice";
import UserCard from "./UserCard";
import { MdSwipeLeft, MdSwipeRight } from "react-icons/md";

const Feed = () => {
  const feedObj = useSelector((store) => store.feed) || [];
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [resText, setResText] = useState("");

  // **Fetch Feed Data on Load**
  useEffect(() => {
    const getFeed = async () => {
      if (feedObj.length > 0) return;
      try {
        const response = await axios.get(BASE_URL + "/user/feed", {
          withCredentials: true,
        });
        dispatch(addFeed(response.data));
      } catch (error) {
        console.error("Error fetching feed:", error);
      }
    };
    getFeed();
  }, [dispatch, feedObj.length]);

  // **Refetch feed if empty**
  const refetchFeed = async () => {
    try {
      const response = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });

      if (response.data.length > 0) {
        dispatch(addFeed(response.data));
        setCurrentIndex(0);
      }
    } catch (error) {
      console.error("Error refetching feed:", error);
    }
  };

  const handleUser = async (id, status) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/send/${status}/${id}`,
        {},
        { withCredentials: true }
      );

      dispatch(removeFromFeed(id)); 
      setShowToast(true);
      setResText(res.data?.message || "Action successful");

      setTimeout(() => {
        setShowToast(false);
      }, 1000);
    } catch (error) {
      console.error("Error processing request:", error);
    }
  };


  useEffect(() => {
    if (feedObj.length === 0) {
      refetchFeed();
    } else {
      setCurrentIndex(0);
    }
  }, [feedObj]);

  // **Handle Drag Swipes**
  const handleDragEnd = (event, info, id) => {
    if (info.offset.x > 150) {
      handleUser(id, "intrested"); 
    } else if (info.offset.x < -150) {
      handleUser(id, "ignore");
    }
  };
console.log(feedObj)
  return (
    <div className="relative flex justify-center mt-5">
      <AnimatePresence>
        {feedObj.length > 0 ? (
          <motion.div
            key={feedObj[currentIndex]?._id}
            className="absolute flex flex-col items-center justify-center bg-base-300 py-2 shadow-xl rounded-lg"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(event, info) =>
              handleDragEnd(event, info, feedObj[currentIndex]?._id)
            }
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <UserCard data={feedObj[currentIndex]} />
            <div className="card-actions">
              <button
                className="btn btn-primary"
                onClick={() => handleUser(feedObj[currentIndex]?._id, "ignore")}
              ><MdSwipeLeft size={30} />
                Ignore
              </button>
              <button
                className="btn btn-secondary"
                onClick={() =>
                  handleUser(feedObj[currentIndex]?._id, "intrested") 
                }
              >
                 Interested
                 <MdSwipeRight size={30} />
              </button>
            </div>
          </motion.div>
        ) : (
          <p className="text-lg font-bold">🎉 You're all caught up! 🎉</p>
        )}
      </AnimatePresence>

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

export default Feed;
