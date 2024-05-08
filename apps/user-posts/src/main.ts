import express from 'express';
import { connectDB } from './config/db';
import router from './routes/routes';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
// connect to db
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
