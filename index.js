/* gemaakt zonder liefde door werp <3 */
// ik zit in een constante depressie


// Laad resources [BEGIN]
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
// Laad resources [END]

// Discord status & console bericht [BEGIN]
client.on("ready", () => {
console.log(`Bot is oplijn! ${client.users.size} gebruikers, ${client.guilds.size} obers.`);
client.user.setActivity(`Mijn penis is ${client.guilds.size}cm lang!`);
});

client.on("guildCreate", guild => {
console.log(`New server: ${guild.name} (id: ${guild.id}). That's ${guild.memberCount} members!`);
client.user.setActivity(`Mijn penis is ${client.guilds.size}cm lang!`);
});

client.on("guildDelete", guild => {
console.log(`Bot left: ${guild.name} (id: ${guild.id}) ÒwÓ`);
client.user.setActivity(`Mijn penis is ${client.guilds.size}cm lang!`);
});
// Discord status & console bericht [EINDE]

// Check voor berichten [BEGIN]
client.on("message", async message => {
// Check voor berichten [EINDE]
	
// Homo! functie [BEGIN]
if(message.author.id === "[USERID]") {
	  // Vervang [USER ID] met het userID van je doelwit.
message.react('533217687401267210');
}	  
});
// Homo! functie [EINDE]
