const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
 
  mrp: {
    type: Number,
    required: true
  },
  shippingcharge: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  totalamount: {
    type: String,
    required: true,
  },
  
  image: {
    type: Array
  },
  
  
})

module.exports = mongoose.model('Product', productSchema)
