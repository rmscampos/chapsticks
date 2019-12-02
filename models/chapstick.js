const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    //can you do a star rating?
    rating: {type: Number, min: 1, max: 5}
}, {
    timestamps: true
});

const chapstickSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    flavor: {
        type: String,
        required: true
    },
    collection: {
        type: String,
    },
    dateAcquired: {
        type: Date,
        default: Date.now()
    },
    reviews: [reviewSchema],
    timestamps: true 
});


module.exports = mongoose.model('Chapstick', chapstickSchema);