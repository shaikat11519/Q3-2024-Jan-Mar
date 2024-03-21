
const Movie = require('../models/Movie'); 

const getAllMovies = async (req, res) => {
	try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: "Data Not Found"});
    }
}



module.exports = {
    getAllMovies
}