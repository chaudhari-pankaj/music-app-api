const express = require('express');
const { getSearchResults } = require('./apis/youtubeAPI/search');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/favicon.ico', (req, res) => res.status(204).end());  

app.get('/search',async (request,response) => {
    console.log(request.query.q);
    response.send(await getSearchResults(request.query.q,10));
});

app.get('/thumbnail/:videoId', async (request,response) => {
    console.log(request.body);
    response.send('recommendations');
})

app.get('/recommendations')
const ytdl = require('ytdl-core-enhanced');

app.get('/:videoId',(request,response) => {
    response.writeHead(200, {
        "content-type" : "audio/mpeg",
        "accept-ranges" : "bytes",
    });
    ytdl(request.params.videoId,{
        quality: 'highestaudio',
        filter : 'audioonly',
    }).pipe(response);
});

const { getVideoDetails } = require('./apis/youtubeAPI/videoDetails');
app.get('/videoDetails/:videoId',async (request,response) => {
    const videoDetails = await getVideoDetails(request.params.videoId);
    response.json(videoDetails);
});

app.listen(process.env.port,() => {
    console.log(`listening for requests on port : ${process.env.port}`)
});