import express from 'express';
import { connectDB } from './config/db';
import router from './routes/userRoutes';
// import Router from './src/routes/postRoute';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/v1/user', router);
// app.use(Router)
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
