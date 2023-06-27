import React from 'react'
import './Leftnav.css'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { LuLayoutDashboard } from 'react-icons/lu'
import { MdOutlineInventory } from 'react-icons/md'
import { BsWindowDesktop } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CgShutterstock } from 'react-icons/cg'
import { AiOutlineFileSync } from 'react-icons/ai'
import { BsArrowRepeat } from 'react-icons/bs'
import { CiMobile3 } from 'react-icons/ci'
import { RiAppsLine } from 'react-icons/ri'
import { AiOutlineSetting } from 'react-icons/ai'


const Leftnav = () => {
    return (
        <div className='left_nav'>
            <li className="left_nav_list first_child">
                <LuLayoutDashboard />
                <h5>Dashboard</h5>

            </li>
            <li className="left_nav_list">
                <MdOutlineInventory />
                <h5>Inventory</h5>
                <RiArrowDropDownLine />
            </li>
            <li className="left_nav_list">
                <BsWindowDesktop />
                <h5>CBM</h5>
                <RiArrowDropDownLine />
            </li>
            <li className="left_nav_list">
                <AiOutlineShoppingCart />
                <h5>Orders</h5>
                <RiArrowDropDownLine />
            </li>
            <li className="left_nav_list">
                <CgShutterstock />
                <h5>Stocks</h5>
                <RiArrowDropDownLine />
            </li>
            <li className="left_nav_list">
                <AiOutlineFileSync />
                <h5>Records</h5>
                <RiArrowDropDownLine />
            </li>
            <li className="left_nav_list">
                <BsArrowRepeat />
                <h5>Automation</h5>
            </li>
            <li className="left_nav_list">
                <CiMobile3 />
                <h5>My Apps</h5>
            </li>
            <li className="left_nav_list">
                <RiAppsLine />
                <h5>Available Apps</h5>
            </li>
            <li className="left_nav_list">
                <AiOutlineSetting />
                <h5>Settings</h5>
                <RiArrowDropDownLine />
            </li>
        </div>
    )
}

export default Leftnav