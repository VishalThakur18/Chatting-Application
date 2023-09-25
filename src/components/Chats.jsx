import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import { useSelector } from "react-redux";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const { darkMode } = useSelector((state) => state.mode);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  /*
  Fix for error Uncaught TypeError: Cannot convert undefined or null to object --> {chats?.length > 0 && Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => .......
 */


  return (
    <div className="chats">
      
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat)=> (
        <div
          className= {`${darkMode ? "userChat" : "userChat_Light"}`}
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo"> 
            <span>{chat[1].userInfo.displayName}</span> 
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;