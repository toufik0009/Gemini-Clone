import React, { useContext, useState } from 'react'
import './SideBar.css'
import { IoMenu } from "react-icons/io5";
import { FaPlus, FaRegMessage } from "react-icons/fa6";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { Context } from '../../context/Context';


function SideBar() {

    const [extended, setExtended] = useState(false)

    const { onSent, prevPrompts, setRecentPrompt,newChat } = useContext(Context)

    const loadPrompt=async()=>{
       setRecentPrompt(prompt)
        await onSent(prompt)

    }

    return (
        <div className='sidebar'>
            <div className="top">
                <IoMenu className='menuIcon sideIcon' onClick={() => { setExtended(prev => !prev) }} />
                <div onClick={()=>{newChat()}} className="new-chat">
                    <FaPlus className='plusIcon sideIcon' />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className='recent-title'>Recent</p>
                        {
                            prevPrompts.map((mes, index) => {
                                return (
                                    <div className="recent-entry">
                                        <FaRegMessage className='messageIcon sideIcon' />
                                        <p title={mes}>{mes.slice(0, 10)}...</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    : null}

            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <MdOutlineQuestionMark className='qusIcon sideIcon' />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <FaHistory className='history sideIcon' />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <IoIosSettings className='settingIcon sideIcon' />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default SideBar