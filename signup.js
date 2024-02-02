import React, { useState } from 'react';
const Signup = () => {
 const [formData, setFormData] = useState({
 username: '',
 password: '',
 });
 const handleInputChange = (e) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
 };
 const handleSignup = async () => {
 try {
 const response = await fetch('http://localhost:5000/signup', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 },
 body: JSON.stringify(formData),
 });
 if (response.ok) {
 } else {
 }
 } catch (error) {
 console.error('Error during signup:', error);
 }
 };
 return (
 <div>
 <h2>Signup</h2>
 <input type="text" name="username" placeholder="Username" onChange={handleInputChange}
/>
 <input type="password" name="password" placeholder="Password"
onChange={handleInputChange} />
 {/* Add more input fields for additional details */}
 <button onClick={handleSignup}>Signup</button>
 </div>
 );
};
export default Signup;
