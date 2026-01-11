const express = require('express');
const { getSearchResults } = require('./apis/youtubeAPI');
require('dotenv').config();

const app = express();

app.get('/favicon.ico', (req, res) => res.status(204).end());  

app.get('/',async (request,response) => {
    response.send(await getSearchResults('tevvez',10));
});

const ytdl = require('ytdl-core-enhanced');

app.get('/:videoId',(request,response) => {
    ytdl(request.params.videoId,{
        quality: 'highestaudio',
        filter : 'audioonly',
    }).pipe(response);
});

app.listen(process.env.port,() => {
    console.log(`listening for requests on port : ${process.env.port}`)
});