import *as express from 'express';
import { connectDB } from './config/db';
import router from './routes/routes';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/v1/Post', router);
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
// connect to db
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
