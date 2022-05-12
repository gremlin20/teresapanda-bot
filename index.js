const Discord = require("discord.js")

const TOKEN = "OTc0MTYyMTU3MTM2NjQyMDk5.GUCR2P.cziiT5_QP33BOvc2HN54uTqO8LtN3n4n9b6XoM"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready",()=>{
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate",(message)=>{
    if (message.content == 'teresa panda'){
        message.reply("Hakken")
    }
})

client.login(TOKEN)