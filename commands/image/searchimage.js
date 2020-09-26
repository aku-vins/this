const { get } = require("snekfetch"); 
const Discord = require("discord.js")
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  
  let si = args.join(" ")
  if (!si) return message.reply("Provide image name!")

    message.channel.startTyping();

    randomPuppy(`${si}`).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'searchimage.png'
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

};


module.exports.help = {
  name: "searchimage",
  description: "searching image",
  usage: "[image name]",
  category: "Image",
  aliases: ["si"]
};