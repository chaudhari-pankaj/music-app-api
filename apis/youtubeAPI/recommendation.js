const getRecommendations = async(searchQuery,maxResults) => {
    try{
        const searchParams = new URLSearchParams({
            part : 'id,snippet',
            maxResults : maxResults,
            q : `${searchQuery}`,
            type : 'video',
            order : 'viewCount',
            videoCategoryId : 10, //10 is for the videos having category = music
            videoDuration : 'short',
            key : process.env.youtube_API_KEY,
        });

        const response = await fetch(`${process.env.youtube_API}/search?${searchParams}`);
        const responseJSON = await response.json();
        const recommendations = responseJSON.items.map((item) => {
            return {
                publishedAt : item.snippet.publishedAt.slice(0,10),
                channelId : item.snippet.channelId,
                channelTitle : item.snippet.channelTitle,
                videoId : item.id.videoId,
                videoTitle : item.snippet.title,
                thumbnailURL : `${item.snippet.thumbnails.high.url}`,
            }
        });
        return recommendations;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = { getRecommendations };