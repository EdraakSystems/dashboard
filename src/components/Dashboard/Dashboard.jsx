import React from 'react'
import './Dashboard.css'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { BsArrowRightShort } from 'react-icons/bs'
import { PiNotepad } from 'react-icons/pi'
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { BiHomeAlt2 } from 'react-icons/bi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiDeleteBin3Line } from 'react-icons/ri'
import { MdShelves } from 'react-icons/md'
import { LiaHandHoldingHeartSolid } from 'react-icons/lia'


const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard_info'>
        <h3>Sales Activity for this week</h3>
        <div>
          <h5>Edit Layout</h5>
          <h5>Filter by Year</h5>
        </div>

      </div>
      <div className="cards">
        <div className="cards_data cards_data_1">
          <div className='cards_data_info'>
            <h5>To be Fulfilled</h5>
            <h3>56</h3>
            <h6>Quality</h6>
          </div>
          <div className='cards_data_logo'>
            <HiOutlineNewspaper />
            <BsArrowRightShort />
          </div>
        </div>
        <div className="cards_data cards_data_2">
          <div className='cards_data_info'>
            <h5>To be Invested</h5>
            <h3>24</h3>
            <h6>Quality</h6>
          </div>
          <div className='logo_top'>
            <PiNotepad />
          </div>
        </div>
        <div className="cards_data cards_data_3">
          <div className='cards_data_info'>
            <h5>Completed</h5>
            <h3>12</h3>
            <h6>Quality</h6>
          </div>
          <div className='cards_data_logo'>
            <BsCheckCircle />
            <BsArrowRightShort />
          </div>
        </div>
        <div className="cards_data cards_data_4">
          <div className='cards_data_info'>
            <h5>Analyzed To be</h5>
            <h3>3</h3>
            <h6>Quality</h6>
          </div>
          <div className='logo_top'>
            <AiOutlineUserAdd />
          </div>
        </div>
      </div>
      <div className="cards_2">
        <div className="cards_2_data">
          <div className='cards_2_data_info1'>
            <div className='cards_2_logo logo_1'>
              < BiHomeAlt2 />
            </div>
            <h5>Out of stock Products</h5>
          </div>
          <div className='cards_2_data_info2'>
            <h3>89.00</h3>
            <div>
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
        <div className="cards_2_data">
          <div className='cards_2_data_info1'>
            <div className='cards_2_logo logo_2'>
              < RiDeleteBin3Line />
            </div>
            <h5>All Products</h5>
          </div>
          <div className='cards_2_data_info2'>
            <h3>267.00</h3>
            <div>
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
        <div className="cards_2_data">
          <div className='cards_2_data_info1'>
            <div className='cards_2_logo logo_3'>
              < MdShelves />
            </div>
            <h5>Archived Products </h5>
          </div>
          <div className='cards_2_data_info2'>
            <h3>2.00</h3>
            <div>
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
        <div className="cards_2_data">
          <div className='cards_2_data_info1'>
            <div className='cards_2_logo logo_4'>
              < LiaHandHoldingHeartSolid />
            </div>
            <h5>Out of stock Products</h5>
          </div>
          <div className='cards_2_data_info2'>
            <h3>684.00</h3>
            <div>
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard