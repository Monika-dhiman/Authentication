import express from 'express';
import cors from 'cors';
import {userRoute} from './routes/user.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', userRoute);


app.listen(8080, () => {
  console.log('Server running on port 8080');
});