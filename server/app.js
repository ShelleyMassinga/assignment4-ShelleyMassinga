const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const wishlistRoutes = require('./routes/wishlist');
const authRoutes = require('./routes/auth');

const app = express();

const mongoURI = process.env.MONGO_URI || 'mongodb://0.0.0.0:27017/bookstore';
console.log('Attempting to connect to MongoDB at:', mongoURI);

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(helmet()); 
app.use(compression()); 
app.use(cors()); 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public/build')));
} else {
  app.use(express.static(path.join(__dirname, 'public')));
}


const rateLimit = require('express-rate-limit');
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100 
});
app.use('/api/', apiLimiter);

app.use('/api/', indexRouter);
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRouter);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
  });
}

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  console.error('Error:', err);

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const statusCode = err.status || 500;
  const errorResponse = {
    status: 'error',
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && {
      stack: err.stack,
      details: err
    })
  };

  if (req.accepts('json')) {
    res.status(statusCode).json(errorResponse);
  } else {
    res.status(statusCode).render('error', errorResponse);
  }
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

module.exports = app;