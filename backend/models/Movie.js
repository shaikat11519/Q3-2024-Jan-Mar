const {model, Schema} = require('mongoose');

const movieSchema = new Schema({
    cover : String,
    title : String,
    description : String,
    genre : String,
    rating: Number,
    price: Number
}, {timestamps: true});

const Movie = model('Movie', movieSchema);

module.exports = Movie;