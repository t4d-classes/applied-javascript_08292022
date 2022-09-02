import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { createAPI } from './routes.js';

mongoose.connect('mongodb://mongo:27017', {
  user: 'root',
  pass: 'dbpass',
  dbName: 'app',
  useNewUrlParser: true,
});

const CarSchema = new mongoose.Schema({
  id: Number,
  make: String,
  model: String,
  year: Number,
  color: String,
  price: Number,
}, {
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
});

const Car = mongoose.model('Car', CarSchema);

const app = express();
const port = 80;

app.use(cors());
app.use(express.json());

app.use(createAPI('cars', Car));

app.listen(port, () => {
  console.log('express app listening on port: ', port);
});