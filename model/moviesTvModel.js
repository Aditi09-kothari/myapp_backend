const mongoose = require("mongoose")

//Defining Schema for Tv and movies data from TMDB APi
const userSchema = new mongoose.Schema({
    id:
    {
        type: Number,
        trim: true
    },
    original_title:
    {
        type: String,
        trim: true
    },
    backdrop_path:
    {
        type: String,
        trim: true
    },
    
    original_language:
    {
        type: String,
        trim: true
    },
    overview:
    {
        type: String,
        trim: true
    },
    poster_path:
    {
        type: String,
        trim: true
    },
    release_date:
    {
        type: String,
        trim: true
    },
    title:
    {
        type: String,
        trim: true
    },
    name:
    {
        type: String,
        trim: true
    },
    vote_average:
    {
        type: Number,
        trim: true
    },
    first_air_date:
    {
        type: String,
        trim: true
    },
})
//Models for MoviePageData, TvPageData.
const MoviePageData = mongoose.model("MoviePageData", userSchema)
const TvPageData = mongoose.model("TvPageData", userSchema)
module.exports = { MoviePageData, TvPageData };