module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("Sorry, you don't have permissions to use this!");
    

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}
https://tenor.com/view/banned-dance-anime-ban-girls-gif-17886902`);

};


module.exports.help = {
  name: "kick",
  description: "Kick a user from server",
  usage: "[user] [reason]",
  category: "Admin",
  aliases: [""]
};