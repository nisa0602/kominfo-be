const mongoose = require ('mongoose');

const gasSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    // status: {
    //     type: Boolean,
    //     required: true
    // },

    created_at: {
        type: Date,
        required: true,
        default: Date.now()
    },

    updated_at: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('Gas', gasSchema)