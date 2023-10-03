const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let productSchema = new Schema({
    product: {type: String, required: true},
    cost:{type:Number, required: true},
    description:{type: String},
    quantity:{type: Number, required: true}
},
{
    collection: 'products',
    timestamps: true
});

module.export =mongoose.model('Product', productSchema)