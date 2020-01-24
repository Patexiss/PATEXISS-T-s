import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";

export default function Register() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

 const handleSubmit = async e => {
   e.preventDefault();
   if(password !== password2){
     alert('Passwords are not a match, try again');
     return;
   }
   const res = await axios.post('/api/user', { email, password})
   localStorage.setItem('token', res.data.token);
   history.push(`/dashboard/${res.data.user._id}`);
 };

  return (
    <div>
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type='email' placeholder='enter email'
        onChange={e =>(e.target.value)}
          value={email} />
         <br />
        <input
         type='password' placeholder='enter password' 
         onChange={e=>(e.target.value)}
          value={password} />
          <br />
        <input
         type='password'
          placeholder='verify your password'
          onChange={e=>(e.target.value)}
          value={password2} />
        <br />
        <button>SUBMIT</button>
        </form>
      </div>
      )
}
