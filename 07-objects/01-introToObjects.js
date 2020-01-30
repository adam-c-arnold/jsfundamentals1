/*
    -object is a container that stores multiple sets of data
    -stores dataas key/value pairs
    -objects are denoted by{}
*/

let netflix={
    id:1,
    showname:'The Office',
    season1:{
        seasonInfo:{
            episodeInfo:[{
                episode:1,
                episodeName:'Pilot'
            }, {
                episode:2,
                episodeName:'Diversity Day'
            },{
                episode:3,
                episodeName:'Health Care'
            },{
                episode:4,
                episodeName:'The Alliance'
            },{
                episode:5,
                episodeName:'Basketball'
            },{
                episode:6,
                episodeName:'Hot Girl'
            }]
        }
    },
    season2:{},
    season3:{},
    season4:{},

}

//to access data insdie of an object, or to dive into an object, we use 
//dot notation

//console.log('all data', netflix);
//console.log('season info', netflix.season1.seasonInfo)
//console.log('specific episode name:', netflix.season1.seasonInfo.episodeInfo[1]
//.episodeName);

console.log('episode number: ${netflix.season1.seasonInfo.episodeInfo[4}.episode}
    -episode name: ${netflix.season1.seasonInfo.episodeInfo[4].episodeName}');


/* 
    -JSON JavaScript Object Notation
    -JSON syntax is derived from JS Object syntax, but JSON
    data is in a text only format
    -JSON exists as a string, and needs to be converted to a native JS
    object if we want to access the data
*/



    }
}

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

//console.log(Object.keys(spaceJam.toonSquad));
//console.log(Object.keys(spaceJam.toonSquad.duck));
//console.log(Object.keys(spaceJam.toonSquad).toString())
console.log(Object.values(spaceJam.nbaPlayers));





<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="index.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    
    var i;
    for (i==0,i=>10,i++){
    console.log(i)}
    <script src="index.js"></script>
  </body>
</html>


function i(){
    for (let i=0, i <=10, i++ ){
        console.log (i);
    }
}



/*
-object bracket notation
-object bracket notation, just like dot notation, allow us to find a value in an object
-object bracket notation also allows us to set the key of an object
-aslo handy if we want to store keys of an object as a variable

-object bracket notation works because all keys inside of an object are strings, even though they're not
wrapped in sinle or double quotes


