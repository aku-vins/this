module.exports.run = async (bot, message, args) => {
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];
  const wk = [
    "Congrats!",
    "GG!",
    "Congratulations!",
    "UwU!",
    "OwO!"
  ]

  const randomm = wk[Math.floor(Math.random() * wk.length)];
    const wkk = [
    "Yes!",
    "GG!",
    "Yeah!",
    "UwU!",
    "OwO!",
    "Its Magic!"
  ]

  const randommm = wkk[Math.floor(Math.random() * wkk.length)];
        const choice = args[0];
        if (!choice) return message.channel.send(`How to play: \`sonic rps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        console.log('Bot Result:', result);
        if (result === choice) return message.reply("Oh no! we had the same choice.");
        
        switch (choice) {
            case 'rock': {
                if (result === 'paper') return message.reply(randommm + ' I win!');
                else return message.reply(randomm + ` | You Win!`);
            }
            case 'paper': {
                if (result === 'scissors') return message.reply(randommm + ' I win!');
                else return message.reply(randomm + ` | You Win!`);        
            }
            case 'scissors': {
                if (result === 'rock') return message.reply(randommm + ' I win!');
                else return message.reply(randomm + ` | You Win!`);
            }
            default: {
                return message.channel.send(`I can respons this! i respon only: \`${acceptedReplies.join(', ')}\``);
            }
        }

};


module.exports.help = {
  name: "rps",
  description: "A simple funny games",
  usage: "[rock, paper, scissors]",
  category: "Fun",
  aliases: [""]
};