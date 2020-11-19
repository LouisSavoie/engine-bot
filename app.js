const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

// ATTACHMENTS

// MEMES ATTACHMENTS (from memes/)
const dockenDance = new Discord.MessageAttachment("memes/dockenDance.gif");
const bestGuildEver = new Discord.MessageAttachment("memes/bestGuildEver.jpg");

// CREATE COMMANDS COLLECTION
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
};

// COMMAND PREFIX
const prefix = '$';

//COMMAND HANDLER
client.on('message', msg => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) {
        return;
    }
    
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

     if(command === 'help'){
         client.commands.get('help').execute(msg, args);
     } else if (command === 'raids') {
        client.commands.get('raids').execute(msg, args);
     } else if (command === 'memes') {
        client.commands.get('memes').execute(msg, args);
     } else if (command === 'dockenDance') {
        client.commands.get('dockenDance').execute(msg, args);
     } else if (command === 'pottuPower') {
        client.commands.get('pottuPower').execute(msg, args);
     } else if (command === 'patelicopter') {
        client.commands.get('patelicopter').execute(msg, args);
     } else if (command === 'bestGuildEver') {
        client.commands.get('bestGuildEver').execute(msg, args);
     }
});

// LOGGIN
client.login(config.token);

// CONFIRM LOGIN
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    //SET STATUS
    client.user.setActivity(`for $ commands`, {type: "WATCHING"});
});