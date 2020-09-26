const talkedRecently = new Set();
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send(`Please wait **1s** for use this command again! ${message.author.username}`);
    } else {

      let vote = db.get(`votes.${message.author.id}`)
      if (vote === null) vote = 0;
      
      message.channel.send(`your votes: **${vote}** vote`)

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 1000);
    }

};

module.exports.help = {
  name: "votes",
  description: "Check your votes",
  usage: "",
  category: "Info",
  aliases: [""]
};
