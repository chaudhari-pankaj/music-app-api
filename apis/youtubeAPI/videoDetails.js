const getVideoDetails = async (videoId) => {
    try {
        const videoParams = {
            part : 'id,snippet,topicDetails',
            id : videoId,
            key : process.env.youtube_API_KEY,
        }
        const queryString = new URLSearchParams(videoParams);
        const response = await fetch(`${process.env.youtube_API}/videos?${queryString}`);
        const responseJSON = await response.json();

        const videoDetails = {
            publishedAt : responseJSON.items[0].snippet.publishedAt.slice(0,10),
            channelId : responseJSON.items[0].snippet.channelId,
            channelTitle : responseJSON.items[0].snippet.channelTitle,
            videoId : responseJSON.items[0].id.videoId,
            videoTitle : responseJSON.items[0].snippet.title,
            thumbnailURL : responseJSON.items[0].snippet.thumbnails.high.url,
        }

        return videoDetails;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = { getVideoDetails };