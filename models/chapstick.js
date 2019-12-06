const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
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
    category: {
        type: String,
        enum: ["Classic", "Essential Oils", "Moisture and Tint", "Vitamin Enriched", "100% Natural", "3 in 1", "CoQ10", "Lip Butter", "S'mores", "I Heart Summer", "Tropical Paradise", "Holiday", "Not Available"]
    },
    season: {
        type: String,
        enum: ["Summer", "Winter"]
    },
    userId: String,
    review: [reviewSchema]
}, {
    timestamps: true 
});


module.exports = mongoose.model('Chapstick', chapstickSchema);