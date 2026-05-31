Check out the frontend for this project : [Link](https://github.com/chaudhari-pankaj/music-streaming-app-frontend.git)
Documentation
<!-- recommendation algorithm -->
>>v1 >> search using topicCategories
>>v2 >> channelName + topicCategories
>>v3 >> (channelName + topicCategories) randomized order
        >> prevents loops if autoPlay is enabled
        >> songs of same creator get less aggressively recommended
<!-- workarounds --> 
>>filtered shorts by detecting description not empty + doesn't contain #shorts
>>filtered so that recommendations don't contain the current song
>>recommendations are based on topicDetails of the current song

<!-- to improve -->
>> persist search results unless person searches for something else.. will reduce api calls
>> recommendation alogrithm needs a lot of imporvement
>>make the sound level global and persist it to better the user experience
>>add autoPlay toggle button