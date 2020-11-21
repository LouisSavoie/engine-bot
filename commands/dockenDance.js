const Discord = require("discord.js");
const dockenDance = new Discord.MessageAttachment("memes/dockenDance.gif");

module.exports = {
    name: 'dockenDance',
    description: "Posts Docken's ironing board dance",
    execute(msg, args){
        msg.channel.send(dockenDance);
    }
}