import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

function ContactUs() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  console.log('params: ', params.id)
  console.log('location: ', location)
  return (
    <div>ContactUs
      <button type="button" onClick={() => navigate('/about') }>got to about</button>

    </div>
  )
}

export default ContactUs