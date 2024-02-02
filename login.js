import React, { useState } from 'react';
const Login = () => {
 const [loginData, setLoginData] = useState({
 username: '',
 password: '',
 });
 const handleInputChange = (e) => {
 setLoginData({ ...loginData, [e.target.name]: e.target.value });
 };
 const handleLogin = async () => {
 try {
 const response = await fetch('http://localhost:5000/login', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 },
 body: JSON.stringify(loginData),
 });
 if (response.ok) {
 // Redirect to profile page or handle success
 } else {
 // Handle error
 }
 } catch (error) {
 console.error('Error during login:', error);
 }
 };
 return (
 <div>
 <h2>Login</h2>
 <input type="text" name="username" placeholder="Username" onChange={handleInputChange}
/>
 <input type="password" name="password" placeholder="Password"
onChange={handleInputChange} />
 <button onClick={handleLogin}>Login</button>
 </div>
 );
};
export default Login;
