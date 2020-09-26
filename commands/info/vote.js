const talkedRecently = new Set();
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send(`Please wait **24h** for use this command again! ${message.author.username}`);
    } else {

      let vote = db.get(`votes.${message.author.id}`)
      if (vote === null) vote = 0;
      
      message.channel.send(`Thanks to vote :), your votes: **${vote}** vote`)
      
      db.add(`votes.${message.author.id}`, 1)
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 600000);
    }

};

module.exports.help = {
  name: "vote",
  description: "vote / daily",
  usage: "",
  category: "Info",
  aliases: [""]
};
