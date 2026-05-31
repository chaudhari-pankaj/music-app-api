const ytdl = require('ytdl-core-enhanced');

//package now mostly only returns one item so filtering is not possible
//so we let the package decide the best item
// export const streamSong = async (videoId,response) => {
//     ytdl(videoId,{
//         quality: 'highestaudio',
//         filter : 'audioonly',
//     }).pipe(response);
// }
const streamSong = async (videoId,response) => {
    try{
        ytdl(videoId).pipe(response);
    }
    catch(error) {
        console.log(error);
    }
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