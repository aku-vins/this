const { RichEmbed } = require("discord.js")


module.exports.run = async (bot, message, args) => {
  
  message.channel.startTyping()
  
  
  const blob1 = bot.emojis.get("749114922834722897");
  const blob2 = bot.emojis.get("749114922897768488");
  const blob4 = bot.emojis.get("749114922868277388");
  
  	let msgping1 = new Date();
      let msgping2 = new Date() - message.createdAt;
  
  
  
  const embed = new RichEmbed()
  .setColor("RED")
  .addField(`${blob1} Time:`, `**${bot.ping}**ms`, true)
  .addField(`${blob2} Latency`, `**${msgping2}**ms`, true)
  .addField(`${blob4} Api`, `**${Math.floor(bot.ping)}**ms`, true)
  .setFooter(`Pong!`)
  
  message.channel.send(embed).then(() => message.channel.stopTyping());
  


};


module.exports.help = {
  name: "ping",
  description: "Check your ping",
  usage: "",
  category: "Info",
  aliases: ["pong", "myping"]
};