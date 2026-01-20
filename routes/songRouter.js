const express = require('express');
const songRouter = express.Router();
const { getSong, downloadSong, getSongDetails, searchSongs, getRecommendations} = require('../controllers/songController');

//routes
songRouter.get('/listen/:videoId',getSong);
songRouter.get('/download/:videoId',downloadSong);
songRouter.get('/songDetails/:videoId',getSongDetails);
songRouter.get('/recommendations/:videoId',getRecommendations);
songRouter.get('/search',searchSongs);

module.exports = { songRouter };