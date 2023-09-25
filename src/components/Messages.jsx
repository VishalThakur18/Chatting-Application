import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message"; 
import { setMode } from '../slices/modeSlice';
import { useSelector } from "react-redux";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const { darkMode } = useSelector((state) => state.mode);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  function secondsToGMT(seconds) {
    const date = new Date(seconds * 1000);
    const options = { timeZone: 'GMT', timeZoneName: 'short' }; 
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12;
    return {hour12, minutes, ampm}; 
    // return date.toLocaleTimeString('en-IN', options);
  }

  return (  
    <div className={`${darkMode ? "messages" : "messages_light"}`}>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;