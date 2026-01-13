const express = require('express');
const { getSearchResults } = require('./apis/youtubeAPI');
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
    ytdl(request.params.videoId,{
        quality: 'highestaudio',
        filter : 'audioonly',
    }).pipe(response);
});

app.listen(process.env.port,() => {
    console.log(`listening for requests on port : ${process.env.port}`)
});