const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    img1:{type:String, required:true},
    img2:{type:String, required:true},
    img3:{type:String, },
    img4:{type:String, },
    des:{type:String, required:true},
    color:{type:String, required:true},
    size:{type:String, required:true},
    productID:{type:mongoose.Schema.Types.ObjectId,required:true},
},{timestamp: true, versionKey: false}
)

const ProductDetailModel = mongoose.model('productdetails', DataSchema)

module.exports = ProductDetailModel