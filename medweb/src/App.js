import React from 'react'

import Login from './components/Login/Login';
import Navbar from './components/navbar/Navbar' 
const App = () => {
  return (
    <div className='App'>
     <Navbar />{/*adding the navigation bar */}
     <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Login /> {/*adding the login form */}
    </div>
  )
}

export default App