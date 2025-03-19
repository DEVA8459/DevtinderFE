import React, { useEffect, useRef, useState } from "react";

import { IoMdAttach } from "react-icons/io";
import { BiSolidSend } from "react-icons/bi";
import { MdEmojiEmotions } from "react-icons/md";

import { createSocketConnection } from "../utils/Socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

const Chat = ({ Chat  }) => {
 

  
  const user = useSelector((store) => store.user);

  const [messages, setMessages] = useState([]);
  const [newMessages, setnewMessages] = useState("");
  const messageEndRef = useRef(null);

  const loggedinUserid = user?._id;
  console.log(loggedinUserid);
  const targetedUserId = Chat._id
  

  const fetchChatMessages = async () => {

      const res = await axios.get(BASE_URL + `/chat/${targetedUserId}`, {
        withCredentials: true,
      });

      console.log(res.data.messages);

      const chatMessages = res?.data?.messages.map((msg) => {
        const { senderId, text } = msg;
        return {
          firstName: senderId?.firstName,
          text:text,
        };
      });
      setMessages(chatMessages)
  };

  useEffect(() => {
    fetchChatMessages();
  }, []);
  useEffect(() => {
    if (!loggedinUserid) return;
    const socket = createSocketConnection();
    socket.emit("joinChat", { loggedinUserid, targetedUserId });

    socket.on("newMessageRecived", ({ firstName, text }) => {
      console.log(firstName + ":" + text);
      setMessages((messages) => [...messages, { firstName, text }]);
    });
    return () => socket.disconnect();
  }, [loggedinUserid, targetedUserId]);


  const sendMessage = () => {
    const socket = createSocketConnection();

    socket.emit("sendMessage", {
      firstName: user.firstName,
      loggedinUserid,
      targetedUserId,
      text: newMessages,
    });
    setnewMessages("");
  };
  console.log(messages);
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="flex mx-auto flex-col justify-between gap-2 bg-black/30 w-[100%] rounded-xl p-2 shadow-xl shadow-black ">
      <p className="flex justify-center text-xl font-semibold bg-rose-500 rounded-full shadow-xl shadow-black p-2 m-2">
        Chat with {Chat?.firstName}
      </p>
      <div className="flex-1 flex-col-reverse overflow-y-auto  ">
        {/* dispaly messages */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              "chat   " +
              (user.firstName === msg.firstName ? "chat-end" : "chat-start")
            }
          >
            {/* <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={msg?.photoUrl}
                />
              </div>
            </div> */}
            <div className="chat-header">
              {msg.firstName}
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div
               className={`chat-bubble shadow-xl shadow-black ${
                user.firstName === msg.firstName ? "chat-bubble-primary" : "chat-bubble-secondary"
              }`}
            ><p className="break-words max-w-[250px] whitespace-pre-wrap">
            {msg.text}
          </p>
              
            </div> 
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
      <div className="flex bg-gray-400  justify-between rounded-full shadow-xl shadow-black">
        <input
          type="text"
          placeholder="type Here...."
          className="bg-gray-700 p-2 m-2 text-white font-bold rounded-l-full w-[100%] shadow-xl shadow-black"
          value={newMessages}
          onChange={(e) => setnewMessages(e.target.value)}
        />

        <button>
          <IoMdAttach size={30} color="black" />
        </button>
        <button>
          <MdEmojiEmotions size={30} color="black" />
        </button>
        <button
          className="bg-rose-500 p-2 m-2 rounded-full shadow-xl shadow-black"
          onClick={sendMessage}
        >
          <BiSolidSend size={20} color="black" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
