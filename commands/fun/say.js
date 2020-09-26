module.exports.run = async (bot, message, args) => {

  const say = args.join("   ")
  if (!say) return message.reply(":x: | Missing arguments! | Example: `sonic say hello!`")

  message.delete()
  
  message.channel.send(say)

};


module.exports.help = {
  name: "say",
  description: "Reword what you say",
  usage: "[text]",
  category: "Fun",
  aliases: [""]
};