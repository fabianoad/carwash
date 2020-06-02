const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    
    model:{ type: String, required: true },
    make: { type: String, required: true },
    km:{ type: Number, required: true },
    color: { 
        type: String,
        lowercase: true },
    phone: [ String ],
    email: {
        type: String,
        lowercase: true
    },
    client: {type: String, required: true}
    
});

exports.Car = mongoose.model('Car', CarSchema);