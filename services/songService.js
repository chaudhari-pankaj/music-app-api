const ytdl = require('ytdl-core-enhanced');

const streamSong = async (videoId,response) => {
    ytdl(videoId,{
        quality: 'highestaudio',
        filter : 'audioonly',
    }).pipe(response);
}

const getSongInfo = async (videoId) => {
    try {
        const songInfo = await ytdl.getInfo(videoId);
        return songInfo;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = { streamSong, getSongInfo };