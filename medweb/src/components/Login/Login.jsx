import React from 'react'
import './Login.css';
const Login = () => {
  return (
   
    <div className = 'page' align='center'>
        
        <br></br>
        <div className='login'>
        <h1>Login</h1>
        {/*Login form asking for login information */}
        <form>
            <label>Email</label>
            
        <br></br>
            <input type='email' />
            <br></br><br></br>
            <label>Password</label>
            
        <br></br>
            <input type='password' />
            <br></br>
            <a  href="url" >Forgot password?</a>
            <br></br><br></br>
            <div className='loginButton'>
                <input type='button' value={'LOGIN'}/>
            </div>
            <br></br><br></br>
            {/* If account does not exist*/}
            <div className='createAccount'>
            <p1>New to Doctor's portal? </p1>
            <br></br>
            <input type='button' value={'SIGN UP'}/>{/*Button click leads to Signup page */}
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

export default Login