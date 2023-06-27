import React from 'react'
import './Dashboard.css'

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
        <div className="cards_data">
          <h5>data</h5>
          <h3>50</h3>
          <h6>Quality</h6>
        </div>
        <div className="cards_data">
          <h5>data</h5>
          <h3>50</h3>
          <h6>Quality</h6>
        </div>
        <div className="cards_data">
          <h5>data</h5>
          <h3>50</h3>
          <h6>Quality</h6>
        </div>
        <div className="cards_data">
          <h5>data</h5>
          <h3>50</h3>
          <h6>Quality</h6>
        </div>
      </div>

    </div>
  )
}

export default Dashboard