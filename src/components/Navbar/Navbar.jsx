import React from 'react'
import './Navbar.css'
import img from '../../assets/shahab.png'
// React Icons
import { MdDriveFolderUpload } from 'react-icons/md'
import { HiOutlineFolderDownload } from 'react-icons/hi'
import { HiOutlinePresentationChartBar } from 'react-icons/hi'
import { LuFolderTree } from 'react-icons/lu'
import { BsSearch } from 'react-icons/bs'
import { GrNotification } from 'react-icons/gr'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { LuMenu } from 'react-icons/lu'


const Navbar = () => {
  return (
    <div className='navbar'>
      <h2 className="nav_logo">Logo</h2>
      <ul className='nav_product'>
        <li className='nav_product_list'>
          <MdDriveFolderUpload />
          <h5>Sales Order</h5>
        </li>
        <li className='nav_product_list'>
          <HiOutlineFolderDownload />
          <h5>Purchase Order</h5>
        </li>
        <li className='nav_product_list'>
          <HiOutlinePresentationChartBar />
          <h5>Products</h5>
        </li>
      </ul>
      <div className="nav_task">
        <LuFolderTree />
        <h5>Task List</h5>
        <h6 className='banner'>33%</h6>
        <div className='progress_parent'>
          <div className='progress_child'></div>
        </div>
        <h5>Track: here comes on 33%</h5>
      </div>
      <div className="nav_search">
        <div>
          <RiArrowDropDownLine />
          <p>Search</p>
        </div>
        <BsSearch />
      </div>
      <div className='nav_user'>
        <GrNotification />
        <img src={img} alt="profile" />
        <h6>Muhammad Hamza</h6>
        <RiArrowDropDownLine />
      </div>
      <div className="menu">
        <LuMenu />
      </div>
    </div>
  )
}

export default Navbar