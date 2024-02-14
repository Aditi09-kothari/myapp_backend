const { MoviePageData, TvPageData } = require("../../model/moviesTvModel")

// get popular movies
const getMovieData = async (req, res) => {
    try {
        // Fetch movie data
        const movieData = await MoviePageData.find();

        // Check if data is found
        if (!movieData || movieData.length === 0) {
            return res.status(404).send('Movie data not found');
        }

        // Send movie data as response
        res.send(movieData);
    } catch (error) {
        console.error('Error fetching movie data:', error);
        res.status(500).send('Internal Server Error');
    }
}


// get Tv data 
const getTvData = async (req, res) => {
    try {
        // Fetch TV data
        const tvData = await TvPageData.find();

        // Check if data is found
        if (!tvData || tvData.length === 0) {
            return res.status(404).send('TV data not found');
        }

        // Send TV data as response
        res.send(tvData);
    } catch (error) {
        console.error('Error fetching TV data:', error);
        res.status(500).send('Internal Server Error');
    }
}
module.exports = { getMovieData, getTvData };