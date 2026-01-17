// const { response } = require("express");

// const sampleResponse = {
//   "kind": "youtube#searchListResponse",
//   "etag": "7iIPcF7zqS3PpMXucIHSzgESdEg",
//   "nextPageToken": "CAoQAA",
//   "regionCode": "IN",
//   "pageInfo": {
//     "totalResults": 456154,
//     "resultsPerPage": 10
//   },
//   "items": [
//     {
//       "kind": "youtube#searchResult",
//       "etag": "3g1DDFOxwzt7UZvJXu7FWMWmikI",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "VybLsEWuwQs"
//       },
//       "snippet": {
//         "publishedAt": "2021-08-14T17:51:59Z",
//         "channelId": "UClg3GpMLnPv3Nc81Mz7xc0g",
//         "title": "Idk what to say about this 😭 #shorts #feature #featureme #comedy #fail #mom #wow",
//         "description": "",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/VybLsEWuwQs/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/VybLsEWuwQs/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/VybLsEWuwQs/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Mackenzie Sol",
//         "liveBroadcastContent": "none",
//         "publishTime": "2021-08-14T17:51:59Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "nsysZrdAN0T60v-e2KApo9gHw18",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "fqTR0UUL-OQ"
//       },
//       "snippet": {
//         "publishedAt": "2024-06-27T04:30:07Z",
//         "channelId": "UCm9SZAl03Rev9sFwloCdz1g",
//         "title": "IDK HOW (MUSIC VIDEO) KARAN AUJLA  | FOUR ME EP  | LATEST PUNJABI SONGS 2024",
//         "description": "Sandeep Rehaan & Karan Aujla Present Song: IDK HOW Singer/Lyrics/Composer: Karan Aujla Music: Ikky & Kenny Beats Video ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/fqTR0UUL-OQ/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/fqTR0UUL-OQ/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/fqTR0UUL-OQ/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Rehaan Records",
//         "liveBroadcastContent": "none",
//         "publishTime": "2024-06-27T04:30:07Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "KrR24nnQW7zltUH3xVuJZa0JakQ",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "VVuQp14fy20"
//       },
//       "snippet": {
//         "publishedAt": "2011-07-13T18:21:50Z",
//         "channelId": "UCWOom9E_zqXS0VdWW949WUA",
//         "title": "Erika - I Don&#39;t Know [Official Video]",
//         "description": "Erika - I Don't Know [Official Video] Follow us: www.timerec.it open.spotify.com/user/timerecords instagram.com/timerecordsofficial ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/VVuQp14fy20/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/VVuQp14fy20/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/VVuQp14fy20/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Time Records",
//         "liveBroadcastContent": "none",
//         "publishTime": "2011-07-13T18:21:50Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "jVmJaHBDVHmPQ91DZ27gEQRh600",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "hXzPxBhhmY8"
//       },
//       "snippet": {
//         "publishedAt": "2018-10-12T04:00:02Z",
//         "channelId": "UCj-V9T3jb8nZXIcFUDeDmxA",
//         "title": "I DONT KNOW HOW BUT THEY FOUND ME - Do It All The Time",
//         "description": "This footage was first thought to be a conceptual art piece produced by the band before making music videos had become ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/hXzPxBhhmY8/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/hXzPxBhhmY8/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/hXzPxBhhmY8/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "IDKHOWVEVO",
//         "liveBroadcastContent": "none",
//         "publishTime": "2018-10-12T04:00:02Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "_ZsO2FYBsyLPwxFztf4Q85bE2HE",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "C3q0aWKd8mw"
//       },
//       "snippet": {
//         "publishedAt": "2022-07-18T14:39:56Z",
//         "channelId": "UCldUc3lPRbibHFOomDrypXA",
//         "title": "ALA - IDK (Official Music Video)",
//         "description": "IDK is available now https://bfan.link/i-don-t-know-7 Produced By Mahdi Machfar Directed by A.L.A DOP: Slim Ben Ayed Editing ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/C3q0aWKd8mw/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/C3q0aWKd8mw/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/C3q0aWKd8mw/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "A.L.A",
//         "liveBroadcastContent": "none",
//         "publishTime": "2022-07-18T14:39:56Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "nMNd_ewbpTSDMGFOlQ7QjEmm5lo",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "NOziyT1Qrpg"
//       },
//       "snippet": {
//         "publishedAt": "2024-06-26T10:00:16Z",
//         "channelId": "UCSmK5WX5U4gdtebWjoL81og",
//         "title": "IDK HOW",
//         "description": "Provided to YouTube by Ditto Music IDK HOW · Karan Aujla Four Me ℗ Karan Aujla/Rehaan Records Released on: 2024-06-26 ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/NOziyT1Qrpg/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/NOziyT1Qrpg/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/NOziyT1Qrpg/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Karan Aujla - Topic",
//         "liveBroadcastContent": "none",
//         "publishTime": "2024-06-26T10:00:16Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "a_INWyDv6hpvVEFZGYSuIe0yIXY",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "TnupaGUj1R8"
//       },
//       "snippet": {
//         "publishedAt": "2025-08-27T05:41:02Z",
//         "channelId": "UCn4rEMqKtwBQ6-oEwbd4PcA",
//         "title": "Love Insurance Kompany (LIK - Tamil) | First Punch | Pradeep Ranganathan | Vignesh Shivan | Anirudh",
//         "description": "Movie : Love Insurance Kompany Starring : Pradeep Ranganathan, S J Suryah, Krithi Shetty, Yogi Babu, Seeman, Gouri Kishan, ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/TnupaGUj1R8/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/TnupaGUj1R8/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/TnupaGUj1R8/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Sony Music South",
//         "liveBroadcastContent": "none",
//         "publishTime": "2025-08-27T05:41:02Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "hCwMdm--JES6J6nMUhsU1XLN8Rc",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "x7u-aajgBj4"
//       },
//       "snippet": {
//         "publishedAt": "2017-11-19T02:19:25Z",
//         "channelId": "UCS0fkG0O6DXJQ2a4WtdDLvQ",
//         "title": "I Don&#39;t Know (Radio Mix)",
//         "description": "Provided to YouTube by Time Records I Don't Know (Radio Mix) · Erika I Don't Know ℗ Time S.p.A. Released on: 2003-05-29 ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/x7u-aajgBj4/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/x7u-aajgBj4/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/x7u-aajgBj4/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Erika de Bonis - Topic",
//         "liveBroadcastContent": "none",
//         "publishTime": "2017-11-19T02:19:25Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "Y1e2DRhvkcp6C6qlgTAAD-xqxCI",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "m4_ZZV8ke1Q"
//       },
//       "snippet": {
//         "publishedAt": "2018-04-12T22:38:34Z",
//         "channelId": "UC-yXuc1__OzjwpsJPlxYUCQ",
//         "title": "KiD TRUNKS &quot;IDK&quot; (WSHH Exclusive - Official Music Video)",
//         "description": "Watch the official music video for \"IDK\" by KiD TRUNKS. \"IDK\" available here: https://empire.lnk.to/IDK Follow KiD TRUNKS ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/m4_ZZV8ke1Q/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/m4_ZZV8ke1Q/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/m4_ZZV8ke1Q/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "WORLDSTARHIPHOP",
//         "liveBroadcastContent": "none",
//         "publishTime": "2018-04-12T22:38:34Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "kxvAcRpzqiFNaNx4taNNFtG-_mM",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "z1HZqi4D1lE"
//       },
//       "snippet": {
//         "publishedAt": "2023-08-04T17:00:06Z",
//         "channelId": "UC8U1N7CdPJJI1hLuSkXWS4g",
//         "title": "IDK - Cleopatra (Official Video)",
//         "description": "Piesa extrasa de pe EP-ul \"Cartea Junglei\" Streaming: https://IDK.lnk.to/CleopatraID https://idk.lnk.to/CARTEAJUNGLEIID IDK ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/z1HZqi4D1lE/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/z1HZqi4D1lE/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/z1HZqi4D1lE/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "idk",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-08-04T17:00:06Z"
//       }
//     }
//   ]
// }

const getSearchResults = async(searchQuery,maxResults) => {
    try{
        const searchParams = new URLSearchParams({
            part : 'id,snippet',
            q : `${searchQuery}`,
            type : 'video',
            maxResults : 30,
            order : 'viewCount',
            videoCategoryId : 10, //10 is for the videos having category = music
            videoDuration : 'short',
            key : process.env.youtube_API_KEY,
        });

        const response = await fetch(`${process.env.youtube_API}/search?${searchParams}`);
        const responseJSON = await response.json();

        const responseFiltered = responseJSON.items.filter((item) => {
            if(item.snippet.description.length === 0 || item.snippet.title.includes("#shorts"))
                return false;
            return true;
        });
        
        const searchResult = responseFiltered.map((item) => {
            return {
                publishedAt : item.snippet.publishedAt.slice(0,10),
                channelId : item.snippet.channelId,
                channelTitle : item.snippet.channelTitle,
                videoId : item.id.videoId,
                videoTitle : item.snippet.title,
                thumbnailURL : `${item.snippet.thumbnails.high.url}`,
            }
        });
        
        return searchResult;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = { getSearchResults };