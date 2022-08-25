const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

app.use((err, req, res) => {
  console.log(err);
  res.status(500).send({ message: err });
});
