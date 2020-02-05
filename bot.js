const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("674568431345074197")
setInterval(function() {
channel.send(`نديرو سبام غاية راك فاهم `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
