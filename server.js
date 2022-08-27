const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session');
require('dotenv/config');

const ads = require('./routes/ads.routes');
const users = require('./routes/users.routes');

let uriDB = process.env.DB_URI;
let secretKey = process.env.EXPRESS_SESSION_SECRET;

const app = express();
app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});

mongoose.connect(uriDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongooseConnection = mongoose.connection;

mongooseConnection.once('open', () => {
  console.log('Connected to the database');
});

mongooseConnection.on('error', (err) => {
  console.log('Error: ', err);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(
  session({
    secret: secretKey,
    // store: new MongoStore({
    //   mongoUrl: uriDB,
    //   mongooseConnection: mongoose.connection,
    // }),
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);

app.use('/api', ads);
app.use('/api', users);

app.use((req, res, next) => {
  req.db = db;
  next();
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
});

app.use((err, req, res) => {
  console.log(err);
  res.status(500).json({ message: err });
});
