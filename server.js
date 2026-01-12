const express = require('express');
const { getSearchResults } = require('./apis/youtubeAPI');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/favicon.ico', (req, res) => res.status(204).end());  

app.post('/search',async (request,response) => {
    console.log(request.body.query);
    response.send(await getSearchResults(request.body.query,10));
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