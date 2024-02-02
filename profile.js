import React, { useEffect, useState } from 'react';
const Profile = () => {
 const [userDetails, setUserDetails] = useState({
 // Initialize with default values or fetch from the API on component mount
 username: '',
 age: 0,
 dob: '',
 contact: '',
 // Add more fields as needed
 });
 useEffect(() => {
 const fetchUserDetails = async () => {
 try {
 const response = await fetch('http://localhost:5000/getUserDetails', {
 method: 'GET',
 headers: {
 'Content-Type': 'application/json',
 },
 // Include authentication token if needed
 });
 if (response.ok) {
 const data = await response.json();
 setUserDetails(data);
 } else {
 // Handle error
 }
 } catch (error) {
 console.error('Error fetching user details:', error);
 }
 };

 fetchUserDetails();
 }, []);
 const handleUpdateProfile = async () => {
 try {
 const response = await fetch('http://localhost:5000/editUserDetails', {
 method: 'PUT',
 headers: {
 'Content-Type': 'application/json',
 },
 body: JSON.stringify(userDetails),
 });
 if (response.ok) {
 // Handle success
 } else {
 // Handle error
 }
 } catch (error) {
 console.error('Error updating user details:', error);
 }
 };
 return (
 <div>
 <h2>Profile</h2>
 <p>Username: {userDetails.username}</p>
 <p>Age: {userDetails.age}</p>
 <p>DOB: {userDetails.dob}</p>
 <p>Contact: {userDetails.contact}</p>
 {/* Add more details */}
 <button onClick={handleUpdateProfile}>Update Profile</button>
 </div>
 );
 };
export default Profile;
