import React, { useContext, useState } from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import InputEmoji from 'react-input-emoji';
import {AiOutlineSend} from "react-icons/ai"

import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useSelector } from "react-redux";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
 

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  
  const { darkMode } = useSelector((state) => state.mode);

  // new thing added 
  // function Example () {
  //   const [ text, setText ] = useState('')

  //   function handleOnEnter (text) {
  //     console.log('enter', text)
  //   }

  //   return (
  //     <div className="input">
  //       <InputEmoji
  //         type="text"
  //         value={text}
  //         onChange={setText}
  //         cleanOnEnter
  //         onEnter={handleOnEnter}
  //         placeholder="Type a message"
  //       />

  //       <div className="send">
  //         <img src={Attach} alt="" />
  //         <input
  //           type="file"
  //           style={{ display: "none" }}
  //           id="file"
  //           onChange={(e) => setImg(e.target.files[0])}
  //         />
  //         <label htmlFor="file">
  //           <img src={Img} alt="" />
  //         </label>
  //         <button onClick={handleSend}>Send</button>
  //       </div>

  //     </div>
  //   )

  // }

  return (
    <div className={`${darkMode ? "input" : "input_Light"}`}>

      <InputEmoji
        value={text}
        cleanOnEnter
        onEnter={handleSend}
        onChange={setText}
        placeholder="Type a message.. "
      />


      <div className="send">
        <input
          cleanOnEnter  
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>
          <AiOutlineSend className="sendIcon"/>
        </button>
      </div>
 
    </div> 
  );
};

export default Input;