import { React, useState, useEffect } from 'react'

import "./login.css"
import logo from "./logo-e78ff0ab.webp"
import img from "./vips3.b2aab4b3.webp"
import img2 from "./Green and White Photographic Blogger Bio-Link Website 2.png"
import img3 from "./Green and White Photographic Blogger Bio-Link Website 1.png"
import img4 from "./Vector.png"
import img5 from "./Vector (1).png"
import img6 from "./Group 1.png"
export default function Login() {
  const [credentials, SetCredentials] = useState({ email: '', password: '' })
  const [show, SetShow] = useState(false)

  function handleOnChange(event) {
    const { name, value } = event.target;
    SetCredentials((prev) => {
      return { ...prev, [name]: value }
    })
  }


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');
  const departmentOptions = ['Marketing', 'Engineering', 'Sales', 'Other']; // Example options

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleDepartmentChange = (event) => setDepartment(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here

    // (Optional) Clear form fields:
    setEmail('');
    setPassword('');
    setDepartment('');
  };


  return (
   
    <div className='main'>
      <div className="image">
     
        <img src={img} alt="" />
      </div>
    
      <div className="form">
      <h1>ALUMNI PORTAL</h1>
        <img src={logo} alt="" style={{ margin:'-25px'}}/>
        <div className="container">
      <div className="box" style={{ fontFamily:'Inika' ,margin:'25px'}} >
        FACULTY
        <img src={img2} alt="" />
      </div>
      <div className="box" style={{ fontFamily:'Inika', margin:'25px'}}>
        ADMIN 
        <img src={img3} alt="" />
      </div>
    </div>
    <div className="form-group">
    <img src={img4} alt="" />
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email Address (e.g., username@example.com)"
          required // Add validation as needed
        />
      </div>
      {/* Password field */}
      <div className="form-group">
      <img src={img6} alt="" />
        <input 
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          required // Add validation as needed
        />
      </div>

      <h6 >forget password</h6>
   
      {/* Department dropdown */}
      <div className="form-group">
      <img src={img5} alt="" />
        <select value={department} onChange={handleDepartmentChange}>
          <option value="">Select Department</option>
          {departmentOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
        <button >submit</button>
      </div>
    </div>
  )
}