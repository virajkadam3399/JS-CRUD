import mongoose from "mongoose";

const Product = mongoose.Schema({
    product:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
});

export default mongoose.model('Products', Product);