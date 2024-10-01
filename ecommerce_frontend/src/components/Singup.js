import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { register } from '../Redux/Action'
function Signup() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [address, setaddress] = useState("")
  const [password, setpassword] = useState("")
  const [phone, setphone] = useState(0)
  const dispatch = useDispatch()
  const handelsubmit = (event) => {
    event.preventDefault()
    dispatch(register({ name, email, address, phone, password }))

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
          <form style={{ height: "350px" }}>
            <div>
              <label>Name & Surname</label>
              <input onChange={(event) => setname(event.target.value)} type="text" className="text-input" />
            </div>
            <div>
              <label>Email</label>
              <input onChange={(event) => setemail(event.target.value)} type="email" className="text-input" />
            </div>
            <div>
              <label>Phone</label>
              <input onChange={(event) => setphone(event.target.value)} type="number" className="text-input" />
            </div>
            <div>
              <label>address</label>
              <input onChange={(event) => setaddress(event.target.value)} type="text" className="text-input" />
            </div>
            <div>
              <label>Password</label>
              <input onChange={(event) => setpassword(event.target.value)} type="password" className="text-input" />
            </div>
            <button onClick={handelsubmit} type="submit" className="primary-btn">
              Sign Up
            </button>
          </form>
        </div>
        <div id='main-footer'>
          <a href="#">Forgot Password</a>
        </div>
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

export default Signup