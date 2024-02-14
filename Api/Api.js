const { MoviePageData,TvPageData,} = require("../model/moviesTvModel");
  //save movies
  const MovieData = async (req, res) => {
    const data1 = req.body.results;
    try {
      const Mdata = await MoviePageData.insertMany(data1);
      if (Mdata) {
        res.status(200).send("Movie's Data added Successfully");
      } else {
        res.status(500).send("Failed to add movie data");
      }
    } catch (error) {
      console.error("Error adding movie data:", error);
      res.status(500).send("Internal Server Error");
    }
  };
  //save tv series
  const TvData = async (req, res) => {
    const data2 = req.body.results;
    try {
      const TData = await TvPageData.insertMany(data2);
      if (TData) {
        res.status(200).send("TV Data added Successfully");
      } else {
        res.status(500).send("Failed to add TV data");
      }
    } catch (error) {
      console.error("Error adding TV data:", error);
      res.status(500).send("Internal Server Error");
    }
  };
  module.exports = { MovieData, TvData };