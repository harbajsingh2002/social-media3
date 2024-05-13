import express from 'express';
import { connectDB } from './config/db';
import router from './routes/userRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
console.log(port);
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  });
