import React from 'react'
import './Signup.css';
const Signup = () => {
  return (
   
    <div className = 'page' align='center'>
        
        <br></br>
        <div className='signup'>
        <h1>Signup</h1>
        {/*Creating the form */}
        <form>

            {/*Asking for signup inforamtion */}
        <label>Name</label>
            
            <br></br>
                <input type='text' />
                <br></br><br></br>
            <label>Email</label>
            
        <br></br>
            <input type='email' />
            <br></br><br></br>
            <label>Password</label>
            
        <br></br>
            <input type='password' />
            <br></br>
            <br></br>
            <div className='signupButton'>
                <input type='button' value={'SIGN UP'}/>
            </div>
            <br></br><br></br>
            {/*If user already has an account, gives login option */}
            <div className='loginAccount'>
            <p1>Already have an account? </p1>
            <br></br>
            
            <input type='button' value={'LOGIN'}/> {/*Button click goes to Login page */}
            <br></br><br></br>
            <p1>OR</p1>
            <br></br> <br></br>
            <input type='button' value={'CONTINUE WITH GOOGLE'}/>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Signup