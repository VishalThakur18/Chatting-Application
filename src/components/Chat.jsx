// import React, { useContext } from 'react'
// import Cam from "../img/cam.png";
// import Add from "../img/add.png";
// import More from "../img/more.png";
// import Messages from './Messages';
// import Input from './Input';
// import { ChatContext } from '../context/ChatContext';
// import { useState } from 'react';

// export const Chat = () => {
//   const { data } = useContext(ChatContext); 

//   return (
//     <div className='chat'>
//       <div className="chatInfo">

//         <span>
//           <img src={data.user?.photoURL} alt=""/> 
//           <div className="userName">
//             {data.user?.displayName} 
//           </div>
//         </span>

//         <div className="chatIcons">
//           <img src={Add} alt="" />
//           <a href="https://chatonlinewithme.000webhostapp.com/#fe3310"><img  src={Cam} alt="" /></a>
//           <img src={More} alt="" />
//         </div>
//       </div> 
//       <Messages/>
//       <Input/>
//     </div>
//   )
// }

// export default Chat;

import React, { useContext, useState } from 'react';
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';
import {FaUserAlt} from "react-icons/fa" 
import { useSelector } from 'react-redux';

export const Chat = () => {
  const { data } = useContext(ChatContext);
  const { darkMode } = useSelector((state) => state.mode);
  // Step 1: Create a state variable to manage the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Step 2: Function to open and close the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  

  return (
    <div className={`${darkMode ? 'chat' : 'chat_Light'}`}>
      <div className= {`${darkMode ? "chatInfo" : "chatInfo_Light"}`}>
        <span>
          <img src={data.user?.photoURL} alt=""/>
          <div className="userName" onClick={openModal}> 
            {data.user?.displayName}
          </div>
        </span>
        <div className={`${darkMode ? "chatIcons" : "chatIcons_Light"}`}>
          <img src={Add} alt="" />
          <a href="https://chatonlinewithme.000webhostapp.com/#fe3310"><img src={Cam} alt="" /></a>
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />

      {/* Step 3: Create the user profile modal */}
      {isModalOpen && (
        <div className={`${darkMode ? "userProfileModal" : "userProfileModalLight"}`}>
          <h2>User Profile</h2>
          <img src={data.user?.photoURL} alt=""/>
          <p><FaUserAlt/>{data.user?.displayName} </p>  
          {/* Add more user profile details here */}
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Chat;
