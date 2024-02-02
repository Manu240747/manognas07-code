Create a file server.js:
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(bodyParser.json());
// Placeholder data for user storage, you may want to use a database
let users = [];
// Signup API
app.post('/signup', (req, res) => {
 const { username, password } = req.body;
 // Add user to storage (you may want to use a database)
 users.push({ username, password });
 res.status(200).json({ message: 'User registered successfully' });
});
// Login API
app.post('/login', (req, res) => {
 const { username, password } = req.body;
 // Check credentials (you may want to use a database)
 const user = users.find((user) => user.username === username && user.password === password);
if (user) {
 res.status(200).json({ message: 'Login successful' });
 } else {
 res.status(401).json({ message: 'Invalid credentials' });
 }
});
// Get User Details API
app.get('/getUserDetails', (req, res) => {
 // Implement logic to fetch user details (you may want to use a database)
 const userDetails = {
 username: 'exampleUser',
 age: 25,
 dob: '1999-01-01',
 contact: '1234567890',
 // Add more fields as needed
 };
 res.status(200).json(userDetails);
});
// Edit User Details API
app.put('/editUserDetails', (req, res) => {
 // Implement logic to edit user details (you may want to use a database)
 const updatedDetails = req.body;
 // Update user details in storage (you may want to use a database)
 // ...
 res.status(200).json({ message: 'User details updated successfully' });
});
app.listen(PORT, () => {
 console.log(Server is running on port ${PORT});
});
