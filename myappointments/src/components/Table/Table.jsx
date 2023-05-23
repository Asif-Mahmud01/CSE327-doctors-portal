import React from 'react'
import './Table.css';
const Table = () => {
  return (
    <div className='main'>
      {/*creating the heading text */}
        <div className='heading'>
        <h><strong>My Appointments</strong></h>
        </div>
        {/*creating the date input */}
        <div className='setDate'>
            <input type='date'></input>
        </div>
        <br></br> <br></br>
        <br></br>
        {/* creating the table*/}
        <div className='table'>
          <table id = "appointments">
            <tr>
              {/*creating the header cells in the first row */}
              <th></th>
              <th>NAME</th>
              <th>SERVICE</th>
              <th>TIME</th>
              
            </tr>

            {/*creating the rows for the data cells */}
            <tr>
              <td>1</td>
              <td>Joe</td>
              <td>Orthodontics</td>
              <td>08:30AM - 09:00AM</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Joe</td>
              <td>Orthodontics</td>
              <td>08:30AM - 09:00AM</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Joe</td>
              <td>Orthodontics</td>
              <td>08:30AM - 09:00AM</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Joe</td>
              <td>Orthodontics</td>
              <td>08:30AM - 09:00AM</td>
            </tr>
          </table>
        </div>
    </div>
  )
}

export default Table