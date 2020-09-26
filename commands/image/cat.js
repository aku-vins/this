const { get } = require("snekfetch"); 
const Discord = require("discord.js")
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

    message.channel.startTyping();

    randomPuppy("cat").then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'cat.png'
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

};


module.exports.help = {
  name: "cat",
  description: "Get cat image",
  usage: "",
  category: "Image",
  aliases: [""]
};