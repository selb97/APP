const express = require('express');
const path = require('path');

const PORT = 3000;
const IP_ADDR = '0.0.0.0';

const app = express();

// EJS templates live in /views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'))

// Static files (css, js, images) live in /public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Front page: renders views/index.ejs
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, IP_ADDR, () => {
  console.log('Server is running on port 3000')
});
