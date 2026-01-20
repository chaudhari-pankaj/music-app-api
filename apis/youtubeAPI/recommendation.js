const { getVideoDetails } = require("./videoDetails");

const getRelatedVideos = async(videoId,maxResults) => {

    const videoDetails = await getVideoDetails(videoId);
    const topicCategories = videoDetails.topicCategories;

    try{
        const searchParams = new URLSearchParams({
            part : 'id,snippet',
            q : `${videoDetails.channelTitle}|${topicCategories}`,
            type : 'video',
            maxResults : maxResults,
            order : 'relevance',
            videoCategoryId : 10, //10 is for the videos having category = music
            videoDuration : 'short',
            key : process.env.youtube_API_KEY,
        });

        const response = await fetch(`${process.env.youtube_API}/search?${searchParams}`);
        const responseJSON = await response.json();

        const responseFiltered = responseJSON.items.filter((item) => {
            if(item.snippet.description.length === 0 || item.snippet.title.includes("#shorts") || item.snippet.videoId === videoId)
                return false;
            return true;
        });
        
        const relatedVideos = responseFiltered.map((item) => {
            return {
                publishedAt : item.snippet.publishedAt.slice(0,10),
                channelId : item.snippet.channelId,
                channelTitle : item.snippet.channelTitle,
                videoId : item.id.videoId,
                videoTitle : item.snippet.title,
                thumbnailURL : `${item.snippet.thumbnails.high.url}`,
            }
        });
        
        return relatedVideos;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = { getRelatedVideos };