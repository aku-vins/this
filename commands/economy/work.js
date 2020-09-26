const talkedRecently = new Set();
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send(`Please wait **1m** for use this command again! ${message.author.username}`);
    } else {
        const coin = bot.emojis.get("747074488201641984");

  const work = Math.floor(Math.random() * 500) + 1;
  db.add(`balance.${message.author.id}`, work)
      const say = [
        "You work as **Chef** and earn",
        "You work as **Online Driver** and earn",
        "You work on **Youtube** and earn",
        "You work as **Teacher** and earn"
      ];
      const random = say[Math.floor(Math.random() * say.length)];
      
      message.channel.send(`${coin} | **${message.author.username}'s**, ${random} **${work}**$`)
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 60000);
    }

};

module.exports.help = {
  name: "work",
  description: "Get many balance",
  usage: "",
  category: "Economy",
  aliases: ["work"]
};
