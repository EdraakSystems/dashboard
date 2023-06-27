import React from 'react'
import './Navbar.css'

// React Icons
import { ImFolderUpload } from 'react-icons/im'
import { ImFolderDownload } from 'react-icons/im'
import { BsFillCalendarRangeFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'
import { GrNotification } from 'react-icons/gr'
import { RxAvatar } from 'react-icons/rx'
import { RiArrowDropDownLine } from 'react-icons/ri'


const Navbar = () => {
  return (
    <div className='navbar'>
      <h2 className="logo">Logo</h2>
      <ul className='nav_products'>
        <li>
          <ImFolderUpload />
          <h5>Sales Order</h5>
        </li>
        <li>
          <ImFolderDownload />
          <h5>Purchase Order</h5>
        </li>
        <li>
          <BsFillCalendarRangeFill />
          Products
        </li>
      </ul>
      <div className="nav_task">
        <ul className='nav_task_list'>
          <li>
            <FaThList />
            Task List
          </li>
          <li>
            <div className='progress_parent'>
              <div className='progress_child'></div>
            </div>
            <h6>Track: here comes on 33%</h6>
          </li>
        </ul>
      </div>
      <div className="nav_search">
        <RiArrowDropDownLine />
        <p>Search</p>
        <BsSearch />
      </div>
      <div className='nav_user'>
        <GrNotification />
        <RxAvatar />
        <h6>Muhammad Hamza</h6>
        <RiArrowDropDownLine />
      </div>
    </div>
  )
}

export default Navbar