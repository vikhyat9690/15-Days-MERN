const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: String,
    images: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    }
})
const productModel = mongoose.model('products', productSchema);
const testProduct = new productModel({
    title: 'Titan Watch',
    price: 1000,
});
testProduct.save().then((res)=>{
    console.log(res);
})