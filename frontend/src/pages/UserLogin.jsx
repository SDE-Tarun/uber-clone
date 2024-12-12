import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
      <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="uber-logo" />
      <form action="">
        <h3 className="text-lg font-medium mb-2">What's your email</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          required
          type="email"
          name="email"
          id="email"
          placeholder="email@example.com"
        />
        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="password"
          name="password"
          id="password"
          placeholder="******"
        />
        <button className="bg-[#111] text-white font-medium mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">Login</button>
        <p className="text-center">New here ? <Link className="text-blue-600" to='/signup'>Create new Account</Link></p>
      </form>
      </div>
      <div>
        <button className="bg-[#10b461] text-white font-medium mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign in as Captain</button>
      </div>
    </div>
  );
};

export default UserLogin;
