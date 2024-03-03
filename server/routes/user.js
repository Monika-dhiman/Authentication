import express from 'express';

export const userRoute = express.Router();

userRoute.get('/', (req, res) => {
  res.send('Hello Users World!');
});

