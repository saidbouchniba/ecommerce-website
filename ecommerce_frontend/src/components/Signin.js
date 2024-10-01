import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/Action'
import { useNavigate } from 'react-router-dom'

function Signin() {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handelsubmit=(event)=>{
    event.preventDefault()
    dispatch(login({email,password},navigate))

  }
  return (
    <div id="wrapper">
    <div id="left">
      <div id="signin">
        <div className="logo">
          <img
            src="https://image.ibb.co/hW1YHq/login-logo.png"
            alt="Sluralpright"
          />
        </div>
        <form>
          <div>
            <label>Email</label>
            <input onChange={(event)=>setemail(event.target.value)} type="text" className="text-input" />
          </div>
          <div>
            <label>Password</label>
            <input onChange={(event)=>setpassword(event.target.value)} type="password" className="text-input" />
          </div>
          <button onClick={handelsubmit} type="submit" className="primary-btn">
            Sign In
          </button>
        </form>
        <div className="links">
          <a href="#">Forgot Password</a>
          <a href="#">Sign in with company or school</a>
        </div>
        <div className="or">
          <hr className="bar" />
          <span>OR</span>
          <hr className="bar" />
        </div>
        <a href="#" className="secondary-btn">
          Create an account
        </a>
      </div>
      <footer id="main-footer">
        <p>Copyright © 2018, Sluralpright All Rights Reserved</p>
        <div>
          <a href="#">terms of use</a> | <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </div>
    <div id="right">
      <div id="showcase">
        <div className="showcase-content">
          <h1 className="showcase-text">
            Let's create the future <strong>together</strong>
          </h1>
          <a href="#" className="secondary-btn">
            Start a FREE 10-day trial
          </a>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Signin