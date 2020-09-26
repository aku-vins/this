module.exports.run = async (bot, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(":x: | Sorry you need **Administrator** permission to use this command")
  
  
    const deleteCount = parseInt(args[0], 10);

    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    

  
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  
    message.channel.send(`Succesfuly cleared **${deleteCount}** message
https://tenor.com/view/anime-gaming-clear-delete-gif-12546883`)


};


module.exports.help = {
  name: "clear",
  description: "Clear messages from channel",
  usage: "[amount]",
  category: "Admin",
  aliases: ["purge"]
};