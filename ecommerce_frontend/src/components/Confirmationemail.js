import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { registerconfirmation } from '../Redux/Action'

function Confirmationemail() {
    const dispatch=useDispatch()
    const {token}=useParams()
    const navigate= useNavigate()

    useEffect(()=>{
        dispatch(registerconfirmation(token,navigate))
    },[])
  return (
    <div>Welcome to our website , Your email will be activated in few minutes</div>
  )
}

export default Confirmationemail