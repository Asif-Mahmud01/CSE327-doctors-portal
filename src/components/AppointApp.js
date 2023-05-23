
 /* the front-end code for the Appointment Page; each section has been utilised as components which were created seperately and IMPORTED */
import AppointmentLanding from './AppoinmentLanding';
import ContactUs from './ContactUs';
import DentalLanding from './DentalLanding';
import Footer from './Footer';
import Landing2 from './Landing2';
import Navbar from './Navbar';
import Testemonial from './Testemonial';
import TimingCards from './TimingCards';


function AppointApp()
{
    return(

        <div className="container mx-auto bg-white rounded-xl">
  <Navbar />
  <Landing2 />
   
   <h1 className='text-center text-2xl my-12'>Timing</h1>
   <TimingCards/>

    <Footer />

  
 


 
 

</div>
 
    )


}
export default AppointApp;