const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const linked = bot.emojis.get("748528659098501140");

  const embed = new RichEmbed()
  .setTitle("Hello!")
  .setDescription(`
Available link:

Donate: ${linked}
[Click here](https://saweria.co/donate/Vins2106)

Official web: ${linked}
[Click here](https://discordbot-sonic.glitch.me/)

Invite me plz: ${linked}
[Click here](https://discord.com/api/oauth2/authorize?client_id=747433438629330996&permissions=305655286&scope=bot)

Join our server: ${linked}
[Click here](https://discord.gg/z9vQWuQ)`)
  .setColor("RANDOM")
  .setTimestamp()
  
  message.channel.send(embed)


};


module.exports.help = {
  name: "other",
  description: "Other about bot",
  usage: "",
  category: "Info",
  aliases: ["invite", "link"]
};