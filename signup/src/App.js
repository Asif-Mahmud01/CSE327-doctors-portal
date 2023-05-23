import React from 'react';
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
const App = () => {
  return (
    <div>
         <Navbar /> {/*Adding the navigation bar */}
     <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Signup /> {/*Adding the signup  form */}
    </div>
  )
}

export default App