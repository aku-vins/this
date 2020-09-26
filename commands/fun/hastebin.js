const hastebin = require('hastebin-gen');


module.exports.run = async (bot, message, args) => {

       let haste = args.slice(0).join(" ")

        let type = args.slice(1).join(" ")

        if (!args[0]) { return message.channel.send("What do you want to post in Hastebin?") }

        hastebin(haste).then(r => {

            message.channel.send("`Posted to Hastebin at this URL:`  " + r);

        }).catch(console.error);

        message.delete()
  
};


module.exports.help = {
  name: "hastebin",
  description: "Make a hastebin",
  usage: "",
  category: "Fun",
  aliases: ["hbin"]
};