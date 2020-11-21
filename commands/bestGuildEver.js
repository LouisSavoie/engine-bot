const Discord = require("discord.js");
const bestGuildEver = new Discord.MessageAttachment("memes/bestGuildEver.jpg");

module.exports = {
    name: 'bestGuildEver',
    description: "Posts Screenshot of Pottu saying TBO is the best Guild ever",
    execute(msg, args){
        msg.channel.send(bestGuildEver);
    }
}