const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/userRoute');

// 1) Initialize App
const app = express();

// 2) MiddleWare
app.use(morgan('dev'));
app.use((req, _, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/users', userRouter);

app.get('/', function(req, res) {
  res.send('Testing API ....');
});

module.exports = app;
