import React, { useContext } from 'react'
import './Main.css'
import { FaUser } from "react-icons/fa6";
import { FaRegCompass } from "react-icons/fa";
import { AiOutlineBulb } from "react-icons/ai";
import { FaRegMessage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { TfiGallery } from "react-icons/tfi";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { FcAddImage } from "react-icons/fc";
import { Context } from '../../context/Context';
import { PiStarFourFill } from "react-icons/pi";

function Main() {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <FaUser className='userIcon' />
            </div>
            <div className="mainContainer">

                {
                    !showResult ?
                        <>
                            <div className="greet">
                                <p><span>Hello, User</span></p>
                                <p>How can i help you today</p>
                            </div>
                            <div className="cards">
                                <div className="card">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <FaRegCompass className='compassIcon cardIcons' />
                                </div>
                                <div className="card">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <AiOutlineBulb className='bulbIcon cardIcons' />
                                </div>
                                <div className="card">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <FaRegMessage className='messageIcon cardIcons' />
                                </div>
                                <div className="card">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <FaCode className='codeIcon cardIcons' />
                                </div>
                            </div>
                        </> :
                        <div className='result'>
                            <div className="result-title">
                                <FaUser className='resultIcon'/>
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="resultData">
                                
                            <PiStarFourFill className='starIcon'/>

                            {
                                loading?<div className='loading'>
                                <hr /> 
                                <hr /> 
                                <hr /> 
                                </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                            }
                                
                            </div>
                        </div>
                }


                <div className="mainBottom">
                    <div className="searchBox">
                        <input onChange={(e) => { setInput(e.target.value) }} value={input} type="text" placeholder='Enter a Prompt here' autoFocus />
                        <div>
                            <TfiGallery className='galleryIcon BottomIcon' />
                            <CiMicrophoneOn className='micIcon BottomIcon' />
                            <IoSend onClick={() => { onSent() }} className='sendIcon BottomIcon' />
                        </div>
                    </div>
                    <p className="bottomInfo">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ea Lorem, ipsum dolor.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main