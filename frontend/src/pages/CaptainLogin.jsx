import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setemail] = useState('')

  const [password, setpassword] = useState('')

  const [captainData, setCaptainData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(email, password);
    setCaptainData({
      email:email,
      password:password
    })
    // console.log(captainData);
    setemail('');
    setpassword('')
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
      <img className='w-20 mb-5 flex items-start' src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png" alt="uber-logo" />
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} 
      action="">
        <h3 className="text-lg font-medium mb-2">What's your email</h3>
        <input

          value={email}

          onChange={(e)=>{
            setemail(e.target.value);
          }}

          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          required
          type="email"
          name="email"
          id="email"
          placeholder="email@example.com"
        />
        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input

          value={password}

          onChange={(e)=>{
            setpassword(e.target.value);
          }}

          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="password"
          name="password"
          id="password"
          placeholder="******"
        />
        <button className="bg-[#111] text-white font-medium mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">Login</button>
        <p className="text-center">Join a fleet ? <Link className="text-blue-600" to='/captain-signup'>Register as a Captain</Link></p>
      </form>
      </div>
      <div>
        <Link to='/login' className="flex items-center justify-center bg-[#FFC107] text-white font-medium mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign in as User</Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
