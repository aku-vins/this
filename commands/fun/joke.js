let giveMeAJoke = require('give-me-a-joke');

module.exports.run = async (bot, message, args) => {
   giveMeAJoke.getRandomDadJoke(function(joke){
        message.channel.send(joke)
    })
};


module.exports.help = {
  name: "joke",
  description: "Get funny joke from this bot",
  usage: "",
  category: "Fun",
  aliases: [""]
};