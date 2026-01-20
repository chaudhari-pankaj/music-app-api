const { streamSong, getSongInfo } = require('../services/songService');

const getSong = (request,response) => {
    response.set({
        "content-type" : "audio/mpeg",
        "accept-ranges" : "bytes",
    });
    streamSong(request.params.videoId,response);
};

const downloadSong = async(request,response) => {
    const videoId = request.params.videoId;
    const videoTitle = (await getSongInfo(videoId)).videoDetails.title;
    response.set({
        "content-type" : "audio/mpeg",
        "content-disposition" : `attachment; filename = ${videoTitle}`,
        "accept-ranges" : "bytes",
    });
    streamSong(videoId,response);
};


const { getVideoDetails } = require('../apis/youtubeAPI/videoDetails');

const getSongDetails = async (request,response) => {
    const videoDetails = await getVideoDetails(request.params.videoId);
    response.json(videoDetails);
};


const { getSearchResults } = require('../apis/youtubeAPI/search');

const searchSongs = async (request,response) => {
    response.json(await getSearchResults(request.query.q,25));
}


const { getRelatedVideos } = require('../apis/youtubeAPI/recommendation');

const getRecommendations = async (request,response) => {
    const recommendations = await getRelatedVideos(request.params.videoId,25);
    response.json(recommendations);
}
module.exports = { getSong, downloadSong, getSongDetails, searchSongs, getRecommendations };