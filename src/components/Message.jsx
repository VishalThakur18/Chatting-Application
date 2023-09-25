import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);


  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]); 
  
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
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />

        <div className="messageTime">
          {secondsToGMT(message.date.seconds).hour12}:{secondsToGMT(message.date.seconds).minutes}
          {secondsToGMT(message.date.seconds).ampm}
        </div>
      </div>

       
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img &&  
        <img 
          src={message.img} 
          alt="No image" 
        />
        }
      </div>

    </div>
  );
};

export default Message;