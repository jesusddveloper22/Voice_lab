import React from 'react'
import { FaWallet } from 'react-icons/fa';
import { FaRegNewspaper } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaClone } from 'react-icons/fa';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaWallet className='icon'/> Credits
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="http://localhost:5173/subscription">
                    <FaRegNewspaper  className='icon'/> Subscription
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="http://localhost:5173/profile">
                    <FaUser  className='icon'/> Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="http://localhost:5173/team">
                    <BsPeopleFill className='icon'/> Team
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="http://localhost:5173/voicecloning">
                    <FaClone className='icon'/> Voice cloning
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Text to video
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Text to speech
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Ai avatar
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> API
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
