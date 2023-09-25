import { signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase';
import Logo from "../img/logo.png";
import { MdOutlineDarkMode } from "react-icons/md"
import { MdOutlineLightMode } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../slices/modeSlice';

export const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [showDetails, setShowDetails] = useState(false);
  const { darkMode } = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  const handleOnclick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="navbar">
      <div className="user">
        <img onClick={handleOnclick} src={currentUser.photoURL} alt="" />
        <span className={`${darkMode ? "logo" : "logo_Light"}`}>
          Wizardry Talks
        </span>
        <div className='modeHeader'>
          <div
            className={`text-2xl cursor-pointer ${darkMode ? "text-richblack-100 " : "text-richblack-700 "}
                    `}
            onClick={() => {
              dispatch(setMode(!darkMode));
            }}
          >
            {
              darkMode ?
                (
                  <MdOutlineLightMode className='darkIcon'/>
                ) :
                (
                  <MdOutlineDarkMode className='darkIcon' color='black'/>
                )
            }
          </div>
          <button className='btn2' onClick={() => signOut(auth)}>
            Logout
          </button>
        </div>
      </div>

      {
        showDetails && (
          <div className='myProfile'>
            <p>{currentUser.displayName}</p>
            <p>Report a problem</p>
            <p>Private policy</p>
            <button style={{ color: "Blue" }} onClick={() => signOut(auth)}>Logout</button>
          </div>
        )
      }
    </div>
  )
}

export default Navbar;