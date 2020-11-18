module.exports = {
    name: 'help',
    description: "DMs list of all root level commands",
    execute(msg, args){
        msg.author.send([
            'Help:',
            'Here is a list of "$" Commands I respond to:',
            '"help": DMs this list',
            '"raids": Posts TBO Raid Dates and Times',
            '"memes": DMs list of TBO Memes',
            '"stories": DMs list of Rainbringer\'s Famous Stories'
        ]);
    }
}