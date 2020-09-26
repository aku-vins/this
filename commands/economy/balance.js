const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  const coin = bot.emojis.get("747074488201641984");
  let user = message.mentions.users.first() || message.author;
  if (user.bot) return message.reply(`:x: | **Bot don't have money**`)
  
  const bal = db.get(`balance.${user.id}`)
  if (!bal === null) bal = 0;
  
  message.channel.send(`${coin} | **${user.username}'s** You have **${bal}**$.
do: \`sonic work\` for get many coin!`)
};

module.exports.help = {
  name: "balance",
  description: "Check your money",
  usage: "",
  category: "Economy",
  aliases: ["bal", "cash", "coin"]
};
