const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const user = message.mentions.users.first() || message.author;
  
  
  const say = [
    "this the avatar",
    "yey you got avatar",
    "profile photo here!",
    `${user.username}'s Here your avatar`
  ];
  const random = say[Math.floor(Math.random() * say.length)];
  const avatar = (user.avatarURL)
  
  const embed = new RichEmbed()
  .setTitle(random)
  .setImage(avatar)
  .setFooter(`${user.tag}`)
  .setTimestamp()
  .setColor("#eeff00")
  
  message.channel.send(embed)
  
  
  


};


module.exports.help = {
  name: "avatar",
  description: "Get user avatar",
  usage: "[user tag]",
  category: "Info",
  aliases: ["pp", "avtr"]
};