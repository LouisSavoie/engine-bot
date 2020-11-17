const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

// CONFIRM LOGIN
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// LOGGIN
client.login(config.token);