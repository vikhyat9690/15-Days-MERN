const productsModel = require('../models/productsModel.js');
const getAllProducts = (req, res) => {
    console.log(req.url)
    res.json({
        status: 'success',
        results: 0,
        data: {
            products: data,
        }
    })
}

const addProduct = async (req, res) => {
    try {
        const data = await productsModel.create(req.body);
        console.log(data);
        res.json({
            status: 'success',
            results: 1,
            data: {
                products: data,
            }
        })
    }
    catch(err) {
        res.status(403);
        console.log(err);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        });
    }
}

const replaceProduct = async (req, res) =>{
    const reqId = req.params.id;
    const data = {...req.body, reqId};
    const res = await productsModel.findOneAndReplace({_id: reqId}, data);
}

module.exports = {
    getAllProducts,
    addProduct
}