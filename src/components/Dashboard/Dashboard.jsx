import React from 'react'
import './Dashboard.css'
import img1 from '../../assets/tshirt.png'
import img2 from '../../assets/frock.png'
import img3 from '../../assets/shoes.png'

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
import { BsSearch } from 'react-icons/bs'
import { FaDotCircle } from 'react-icons/fa'


const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard_info'>
        <h2>Sales Activity for this week</h2>
        <div>
          <h5>Edit Layout</h5>
          <h5>Filter by Year</h5>
        </div>

      </div>
      <div className="cards container">
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
      <div className="cards_2 container">
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
      <div className="card_3">
        <div className="cards_3_data cards_3_table ">
          <div className="table_caption">
            <h2>Latest Sales Orders-By Sales Channels</h2>
            <h4>Enable</h4>
          </div>
          <div className="table_filter">
            <div className="table_search">
              <p>510245215</p>
              <BsSearch />
            </div>
            <ul>
              <li>All</li>
              <li>Open</li>
              <li>Completed</li>
              <li>Filled</li>
            </ul>
          </div>
          <div className="table_data">
            <table>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Fulfillment Status</th>
                <th>Payment Status</th>
                <th>Total</th>
              </tr>
              <tr className='first_row'>
                <td>50000B3</td>
                <td>Shahab Yaseen</td>
                <td>Fulfilled</td>
                <td>Paid</td>
                <td>$6.000</td>
              </tr>
              <tr className='second_row'>
                <td>50000B3</td>
                <td>Shahab Yaseen</td>
                <td>Canceled</td>
                <td>Partially Paid</td>
                <td>$12.000</td>
              </tr>
              <tr className='third_row'>
                <td>50000B3</td>
                <td>Shahab Yaseen</td>
                <td>Partially Fulfilled</td>
                <td>Fulfilled</td>
                <td>$200</td>
              </tr>
              <tr className='fourth_row'>
                <td>50000B3</td>
                <td>Shahab Yaseen</td>
                <td>Unfulfilled</td>
                <td>Pending</td>
                <td>$10</td>
              </tr>
              <tr className='fifth_row'>
                <td>50000B3</td>
                <td>Shahab Yaseen</td>
                <td>Draft</td>
                <td>Partially Paid</td>
                <td>$3.000</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="card3_container">
          <div className="cards_3_data cards_3_purchase">
            <h2>Purchase Orders</h2>
            <div className="cards3_bill">
              <h3>Received orders</h3>
              <h3>$20</h3>
              <h3>Total Cost (USD)</h3>
              <h3>$4600</h3>
            </div>
            <hr className="horizontal_line" />

            <div className="cards3_bill_detail">
              <h3>Incoming Purchase orders</h3>
              <div className="details">
                <div className='details_logo_1'>
                  <FaDotCircle />
                  <h3>JP0005</h3>
                  <h3>$1200</h3>
                </div>
                <h6>Shahab Yaseen</h6>
              </div>
              <div className="details">
                <div className='details_logo_2'>
                  <FaDotCircle />
                  <h3>JP0005</h3>
                  <h3>$1000</h3>
                </div>
                <h6>Shahab Yaseen</h6>
              </div>
              <div className="details">
                <div className='details_logo_3'>
                  <FaDotCircle />
                  <h3>JP0005</h3>
                  <h3>$200</h3>
                </div>
                <h6>Shahab Yaseen</h6>
              </div>
              <div className="details">
                <div className='details_logo_4'>
                  <FaDotCircle />
                  <h3>JP0005</h3>
                  <h3>$650</h3>
                </div>
                <h6>Shahab Yaseen</h6>
              </div>
              <div className="details">
                <div className='details_logo_5'>
                  <FaDotCircle />
                  <h3>JP0005</h3>
                  <h3>$10450</h3>
                </div>
                <h6>Shahab Yaseen</h6>
              </div>
            </div>
            <h3>View all</h3>
          </div>
          <div className="cards_3_data cards_3_top_selling">
            <h2>Top Selling Products</h2>
            <div className='card3_list'>
              <ul className='card3_list_ul card3_tshirt'>
                <li><img src={img1} alt="tshirt" /></li>
                <li>T-Shirt for Men</li>
                <li>$50</li>
                <hr className="products_hr" />
              </ul>
              <ul className='card3_list_ul card3_tshirt'>
                <li><img src={img1} alt="tshirt" /></li>
                <li>T-Shirt for Men</li>
                <li>$50</li>
                <hr className="products_hr" />

              </ul>

              <ul className='card3_list_ul'>
                <li><img src={img2} alt="frock" /></li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
                <li>$250</li>
                <hr className="products_hr" />

              </ul>
              <ul className='card3_list_ul'>
                <li><img src={img2} alt="frock" /></li>
                <li>Lorem, ipsum dolor sit amet consectetur</li>
                <li>$250</li>
                <hr className="products_hr" />
              </ul>
              <ul className='card3_list_ul'>
                <li><img src={img3} alt="frock" /></li>
                <li>Lorem ipsum dolor sit amet </li>
                <li>$80</li>
              </ul>
              <ul className='card3_list_ul'>
                <li><img src={img3} alt="frock" /></li>
                <li>Lorem, ipsum dolor sit amet </li>
                <li>$80</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Dashboard