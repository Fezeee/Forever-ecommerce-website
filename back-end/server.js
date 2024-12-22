import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRoute.js';
import cartRouer from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();
const port = process.env.PORT || 4001;
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

//API endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouer);
app.use('/api/order', orderRouter);
app.get('/', (req, res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log('Server started on PORT ' + port)
})