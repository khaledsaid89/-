const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("602408901811634176")
setInterval(function() {
channel.send(`كسم مصر`);
}, 30)
})

client.login(process.env.BOT_TOKEN);