const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    categoryName:{type:String, unique:true},
    categoryImg:{type:String,required:true},
},{timestamp: true, versionKey: false}
)

const CategoreModel = mongoose.model('categories', DataSchema)

module.exports = CategoreModel