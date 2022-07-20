import React from 'react';
import "./LeftBar.css"
import { RiUser5Line } from 'react-icons/ri';
import {BsBriefcase} from 'react-icons/bs';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {HiOutlineFolderAdd} from 'react-icons/hi';
import {BiMessageRoundedDots} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';

function LeftBar() {
  return ( 
    <div className="Side">
    <div className="Bloc"><h1 className="Title">   <RiUser5Line/>   Users </h1> </div>
    <div className="Bloc"><h1 className="Title"> <BsBriefcase/>    Cases </h1> </div>
    <div className="Bloc"><h1 className="Title"> <AiOutlineUserAdd/>    Add User </h1> </div>
    <div className="Bloc"><h1 className="Title"> <HiOutlineFolderAdd/>    Add Case </h1></div>
    <div className="Bloc"><h1 className="Title"> <BiMessageRoundedDots/>    Messages</h1> </div>
    <div className="Bloc"><h1 className="Title"> <CgProfile/>    Profile </h1> </div>   
    </div>
  )
}

export default LeftBar