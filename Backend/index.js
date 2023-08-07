import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/JSCrud',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.listen(3344, ()=> console.log('Server Started...'));
