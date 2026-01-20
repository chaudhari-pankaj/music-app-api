this is the backend for a music streaming app

<!-- recommendation algorithm -->
>>v1 >> search using topicCategories
>>v2 >> channelName + topicCategories
>>v3 >> (channelName + topicCategories) randomized order
        >> prevents loops if autoPlay is enabled
        >> songs of same creator get less (by a little margin.. but anything is better than nothing) aggressively recommended
<!-- workarounds --> 
>>filtered shorts by detecting description not empty + doesn't contain #shorts
>>filtered so that recommendations don't contain the current song
>>recommendations are based on topicDetails of the current song

<!-- to improve -->
>> persist search results unless person searches for something else.. will reduce api calls
>> recommendation alogrithm needs a lot of imporvement
>>figure out a way to reduce api calls.. idk how just figure out
>>make the sound level global and persist it to better the user experience
>>add autoPlay toggle button (do you wanna add?? api limit ... maybe just have auto play for playlists)

<!-- new learning -->
>>use content-disposition : attachemet; filename = "<insert filename>" header to trigger download instead of loading the content on the browser