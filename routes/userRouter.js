const express = require("express");
const router = express.Router();
const SignUp = require("../controllers/auth/SignUp");
const Login = require("../controllers/auth/Login");
const Logout = require("../controllers/auth/Logout");
const VerifyUser = require("../controllers/auth/VerifyUser");
const BookmarkMovie = require("../controllers/movie/Bookmark");
const GetAllBookmarks = require("../controllers/movie/GetAllBookmark");
const DeleteBookmark = require("../controllers/movie/DeleteBookmark");
const { MovieData, TvData } = require("../Api/Api")
const { getMovieData, getTvData } = require("../controllers/movie/MoviesControllers")
const checkAuth = require("../middleware/verify_user")

// user router
router.post("/movie",MovieData)
router.post("/tv",TvData)
router.get("/tbdb/moviedata",getMovieData)
router.get("/tbdb/tvdata",getTvData)
router.post("/login", Login)
router.get("/logout", Logout)
router.get("/verify-user", VerifyUser)
router.post("/bookmark-movie", BookmarkMovie)
router.get("/get-all-bookmarks/:email", GetAllBookmarks)
router.delete("/delete-bookmark/:type/:email/:movie_id", DeleteBookmark)
router.post("/signup", checkAuth, SignUp)

module.exports = router;