const talkedRecently = new Set();
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send(`Please wait **10m** for use this command again! ${message.author.username}`);
    } else {
        const coin = bot.emojis.get("747074488201641984");

        let amount = args.join(" ") 
  if (!amount) return message.reply(":x: | Provide amount!")
      let bal = db.get(`balance.${message.author.id}`)
      if (bal < amount) return message.reply(`:x: | **${message.author.username}**! Your money on wallet not enough to **Blackjack**`);
      
      
      const ramdon = Math.floor(Math.random() * amount) + 2;
      
      const m = await message.channel.send(`**Loading... | Waiting other user!**`)
      
      const editt = (`${coin} | You **Blackjack** with amount: **${amount}**$ and got: **${ramdon}**$`)
      
      m.edit(editt)
      db.add(`balance.${message.author.id}`, ramdon)
      db.subtract(`balance.${message.author.id}`, ramdon)
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 600000);
    }

};

module.exports.help = {
  name: "blackjack",
  description: "Get many money but with BLACKJACK",
  usage: "[amount]",
  category: "Economy",
  aliases: ["bj", "blacjj", "bjack"]
};
