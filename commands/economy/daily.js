const talkedRecently = new Set();
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`Please wait **24h** for use this command again! ${message.author.username}`);
    } else {
        const coin = bot.emojis.get("747074488201641984");
      
      message.channel.send(`${coin} | **${message.author.username}'s** You succesfuly claim your daily, total: **500**$`)
      db.add(`balance.${message.author.id}`, 500)

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 8.64e+7);
    }

};

module.exports.help = {
  name: "daily",
  description: "Get free money from daily",
  usage: "",
  category: "Economy",
  aliases: ""
};
