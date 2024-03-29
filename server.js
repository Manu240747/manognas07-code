const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, this is your server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
