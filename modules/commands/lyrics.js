module.exports.config = {
	name: "lyrics",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Tùy Tâm",
	description: "Lyrics",
	commandCategory: "media",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args, __GLOBAL }) {
 var lyr = require("lyrics-finder"); 
const axios = require("axios"), 
fs = require("fs-extra"); 
var {body} = event; 
let lyrics = await lyr(body); 
var YouTubeAPI = require("simple-youtube-api")
const youtube = new YouTubeAPI("AIzaSyBJl0esWNv12ukwIjSARrqof0zI2XXt3Y4");
var results = await youtube.searchVideos(body, 1);
for (let value of results) {
var idmus = value.id;
} 
var ytdl = require("ytdl-core"); 
ytdl("https://m.youtube.com/watch?v="+idmus).pipe(fs.createWriteStream(__dirname + `/cache/lyric.m4a`)).on("close", () => { 

api.sendMessage({attachment: fs. createReadStream(__dirname+"/cache/lyric.m4a"), body: lyrics}, event.threadID, event.messageID);
 } ) 
} 

