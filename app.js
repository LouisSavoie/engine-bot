const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

// LOGGIN
client.login(config.token);

// CONFIRM LOGIN
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    //SET STATUS
    client.user.setActivity(`for !eb commands`, {type: "WATCHING"});
});

//------
// INFO
//------

// LISTENERS

// HELP LIST
client.on('message', msg => {
    if(msg.content === '!eb'){
        msg.author.send([
            "",
            "Here is a list of Commands I respond to:",
            "'!eb raids': Lists TBO Raid Dates and Times",
            "'!eb memes': Lists TBO Original Memes Commands",
            "'!eb stories': Lists Rainbringer's famous Stories",
        ]);
    }
});

// RAIDS
client.on('message', msg => {
    if(msg.content === '!eb raids'){
        msg.reply([
            "",
            "TBO Raid Dates & Times:",
            "Tuesday, 8pm East, MC/BWL/AQ40/NAXX, Official Raid",
            "Wednesday, 8pm East, ZG/AQ20, Hosted by Kryyk",
            "Thursday, 8pm East, MC/BWL/AQ40/NAXX, Official Raid",
            "Sunday, 8pm East, ZG/AQ20, Hosted by Kryyk",
            "For Raid signups see the Announcements Channel."
        ]);
    }
});

//-------
// MEMES
//-------

// MEMES ATTACHMENTS (from memes/)
const dockenDance = new Discord.MessageAttachment("memes/dockenDance.gif");
const bestEver = new Discord.MessageAttachment("memes/bestEver.jpg");

// MEMES LIST
client.on('message', msg => {
    if(msg.content === '!eb memes'){
        msg.author.send([
            "",
            "TBO Original Memes (!eb + meme):",
            "docken dance",
            "pottu power",
            "patelicopter",
            "doti",
            "best guild"
        ]);
    }
});

// DOCKEN DANCE
client.on('message', msg => {
    if(msg.content === '!eb docken dance'){
        msg.channel.send(dockenDance);
    }
});

// BY THE POWER OF POTTU
client.on('message', msg => {
    if(msg.content === '!eb pottu power'){
        msg.channel.send("https://www.youtube.com/watch?v=NhF8e1KG7Lo");
    }
});

// PATELICOPTER
client.on('message', msg => {
    if(msg.content === '!eb patelicopter'){
        msg.channel.send("https://www.youtube.com/watch?v=z2J7EMDoMco");
    }
});

// DOTTI
client.on('message', msg => {
    if(msg.content === '!eb doti'){
        msg.reply("Fuckin' Doti");
    }
});

// BEST GUILD EVER -POTTU
client.on('message', msg => {
    if(msg.content === '!eb best guild'){
        msg.channel.send(bestEver);
    }
});

//---------
// STORIES
//---------