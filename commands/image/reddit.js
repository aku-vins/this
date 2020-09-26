const api = require("imageapi.js");
const { RichEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let Subreddit = args.join(" ")
    if (!Subreddit)
      return message.channel.send(`You did not specify your subreddit!`);
    try {
      let img = await api(Subreddit, true);
      const Embed = new RichEmbed()
        .setTitle(`Result image from r/${Subreddit}`)
        .setColor("RANDOM")
        .setImage(img)
        .setDescription(`[Click here if the image not showing](https://reddit.com/r/${Subreddit}  )`);
      message.channel.send(Embed);
    } catch (err) {
      message.channel.send(err);
    }

};


module.exports.help = {
  name: "reddit",
  description: "Get image from reddit",
  usage: "[image name]",
  category: "Image",
  aliases: ["red"]
};