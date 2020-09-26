const { get } = require("snekfetch"); 
const Discord = require("discord.js")
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

    message.channel.startTyping();

    randomPuppy("meme").then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

};


module.exports.help = {
  name: "meme",
  description: "Get meme image",
  usage: "",
  category: "Image",
  aliases: [""]
};