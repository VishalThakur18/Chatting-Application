import React from 'react'
import front from "../img/front picture.svg"
import side from "../img/excellent-review.png"
import sideicon from "../img/chat.png"
import { Link } from 'react-router-dom'


const Landingpage = () => {
    return (
        <div className='main-container1'>
            <div className='SideImg1'>
                <img src={side} />
            </div>
            <div className='SideIcon1'>
                <div className='backEffect21'></div>
                <img src={sideicon} />
            </div>
            <div className='imgContainer1'>
                <div className='backEffect1'></div>
                <img src={front} />
            </div>
            <div className='title1'>
                <span className='name1'>
                    <h1>
                        WizardryTalks
                    </h1>
                </span>
            </div>

            <div>
                <div className='greeting-text1'>
                    <span>
                        <p> Where Tech Meets Enchanted Conversations.</p>
                    </span>
                </div>
                <div className='btnContainer1'>
                    <button className='btn1'>
                        <Link to={"/register"} className='get-started-link'>Get Started</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Landingpage