const {model, Schema, mongoose } = require('mongoose');

const cartSchema = new Schema({
    movies: [{
        movieId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Movie',
          required: true
        }
      }],
      total: {
        type: Number,
        default: 0
      }
},{timestamps: true});

const Cart = model('Cart', cartSchema);

module.exports = Cart;