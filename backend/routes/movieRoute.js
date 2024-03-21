const router = require('express').Router();
const {getAllMovies} = require('../controller/movieController');
const {createCart} = require('../controller/cartController');



router.get('/get-all', getAllMovies);
router.post('/cart', createCart);

module.exports = router;