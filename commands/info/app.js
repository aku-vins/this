const Discord = require("discord.js");
const { RichEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
  const discord = bot.emojis.get("748862875866497035");
  const yt = bot.emojis.get("748862209538523207");
  const ig = bot.emojis.get("748862045784506388");
  const twit = bot.emojis.get("748862345216000030");
  const topgg = bot.emojis.get("747430422408855633");
    const meow = bot.emojis.get("748944380001255445");
  const sonic = bot.emojis.get("748944906512236626");
  const git = bot.emojis.get("748946098093162627");
  const patreon = bot.emojis.get("748946811389083718");
  const steam = bot.emojis.get("748947395320217640");
  const google = bot.emojis.get("748948028693545122");
  const epic = bot.emojis.get("748949137650745395")

  const embed = new RichEmbed()
  .setTitle("Here the Website Link!")
  .addField(`${discord} Discord`, `[Click here](https://discord.com)`, true)
  .addField(`${sonic} Sonic`, `[Click here](https://discordbot-sonic.glitch.me)`, true)
  .addField(`${yt} Youtube`, `[Click here](https://www.youtube.com)`, true)
  .addField(`${ig} Instagram`, `[Click here](https://www.instagram.com)`, true)
  .addField(`${twit} Twitter`, `[Click here](https://twitter.com)`, true)
  .addField(`${topgg} Top.gg`, `[Click here](https://top.gg)`, true)
  .addField(`${meow} Emoji.gg`, `[Click here](https://emoji.gg/)`, true)
  .addField(`${git} Github`, `[Click here](https://github.com)`, true)
  .addField(`${patreon} Patreon`, `[Click here](https://www.patreon.com)`, true)
  .addField(`${steam} Steam`, `[Click here](https://store.steampowered.com)`, true)
  .addField(`${epic} Epic Games`, `[Click here](https://www.epicgames.com/store/en-US/)`, true)
  .addField(`${google} Google`, `[Click here](https://www.google.co.id/?hl=id)`, true)
  .setFooter(`📊 | The applications may slowly be added`)
  .setColor("RANDOM")
  .setTimestamp()
  
  message.channel.send(embed)


  
};


module.exports.help = {
  name: "website",
  description: "Get web link",
  usage: "",
  category: "Info",
  aliases: ["web", "weblink"]
};