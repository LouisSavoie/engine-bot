module.exports = {
    name: 'memes',
    description: "DMs list of TBO Memes",
    execute(msg, args){
        msg.author.send([
            "Memes:",
            "TBO Original Memes ($+meme):",
            "dockenDance",
            "pottuPower",
            "patelicopter",
            "bestGuild"
        ]);
    }
}