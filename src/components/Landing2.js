 /* the Landing2 component which will display the calendar */
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Landing2()
{
    const [selectedDate, setSelectedDate] = useState(new Date());
   
    return(
        <section className="container your-component landing flex mt-32 items-center py-32" >

  <div className=' mx-40'>
  
         
      
         
            <h1>Book Appointment</h1>
            <Calendar
              value={selectedDate}
              onChange={setSelectedDate}
            />
          
      

          
 
  </div>
  <div className="img-section flex-none">
                    <img src="/images/chair 1.svg" alt="chair" />
                </div>

</section>
    )
}
export default Landing2;