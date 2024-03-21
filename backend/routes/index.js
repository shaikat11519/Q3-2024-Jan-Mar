const router = require('express').Router();
const movieRoute = require('./movieRoute');

router.use('/api/v1/movie', movieRoute);


module.exports = router;