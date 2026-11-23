const express = require('express');
const path = require('path');

const PORT = 3000;
const IP_ADDR = '0.0.0.0';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, IP_ADDR, () => {
  console.log('Server is running on port 3000')
});
