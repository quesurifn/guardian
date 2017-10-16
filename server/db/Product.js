var mongoose = require('mongoose')
var Schema = mongoose.Schema



var productSchema = new Schema({
    name: String, 
    price: Number,
    desc: String,
    images: Array,
    link: String,
    comingSoon: Boolean,
    quantity: Number
})

var Product = mongoose.model('Product', productSchema)

module.exports = Product;