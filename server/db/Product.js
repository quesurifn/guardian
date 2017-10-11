var mongoose = require('mongoose')
var Schema = mongoose.Schema



var productSchema = new Schema({
    name: String, 
    price: Number,
    desc: String,
    images: Array,
    link: String
})

var Product = mongoose.model('Product', productSchema)

module.exports = Product;