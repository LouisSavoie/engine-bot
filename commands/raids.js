module.exports = {
    name: 'raids',
    description: "Posts TBO Raid Dates and Times",
    execute(msg, args){
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
}