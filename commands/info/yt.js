const fetch = require("node-superfetch");
const config = require("./botconfig.json");
const { RichEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    
  const discord = bot.emojis.get("748862875866497035");
  const yt = bot.emojis.get("748862209538523207");
  const ig = bot.emojis.get("748862045784506388");
  const twit = bot.emojis.get("748862345216000030");
  const topgg = bot.emojis.get("747430422408855633");
    const linked = bot.emojis.get("748528659098501140");
  const like = bot.emojis.get("748899086933033032");
  const Dislike = bot.emojis.get("748899165366648953");

  const text = `${yt} Youtube Application`
  
    let name = args.join(" ");
    if (!name) return message.channel.send("Unknown channel name.");

    const channel = await fetch.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=${config.google}&maxResults=1&type=channel`)
    .catch(() => message.channel.send("Unknown channel error."));

    if (!channel.body.items[0]) return message.channel.send("No channel result. Try again.");

    const data = await fetch.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channel.body.items[0].id.channelId}&key=${config.google}`)
    .catch(() => message.channel.send("Unknown channel data error."));

    const embed = new RichEmbed()
    .setColor("RED")
    .setThumbnail(channel.body.items[0].snippet.thumbnails.high.url)
    .setTimestamp(new Date())
    .setTitle(text)
    .addField(`${yt} Name`, channel.body.items[0].snippet.channelTitle, true)
    .addField(`${yt} Subscriber`, parseInt(data.body.items[0].statistics.subscriberCount).toLocaleString(), true)
    .addField(`${yt} Total Views`, parseInt(data.body.items[0].statistics.viewCount).toLocaleString(), true)
    .addField(`${yt} Total Video[s]`, parseInt(data.body.items[0].statistics.videoCount).toLocaleString(), true)
    .addField(`${yt} Date Created`, new Date(channel.body.items[0].snippet.publishedAt).toDateString(), true)
    .addField(`${linked} Link`, `[${channel.body.items[0].snippet.channelTitle}](https://www.youtube.com/channel/${channel.body.items[0].id.channelId})`, true)
    .addField(`:clipboard: Description`, channel.body.items[0].snippet.description, true)
    const m = await message.channel.send(embed);
  
  m.react(yt)
  m.react(like)
  m.react(Dislike)
}


module.exports.help = {
  name: "youtube",
  description: "Check your youtube channel stats",
  usage: "[channel name]",
  category: "Info",
  aliases: ["yt"]
};