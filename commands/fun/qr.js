const oneLine = require('common-tags').oneLine;

module.exports.run = async (bot, message, args) => {

        var text = args;
        if (args.length < 2 ) { 
            message.reply("You must add text to your command, so I can convert it to a QR code.\nEg: `sonic qr This message is now encoded as a QR code` ")
        }

        else {
            // Necessary for choosing random colours for rich embeds
            var colour_array = ["1211996", "3447003", "13089792", "16711858", "1088163", "16098851", "6150962"]
            var randomNumber = getRandomNumber(0, colour_array.length - 1);
            var randomColour = colour_array[randomNumber];

            var user_text = text.slice(" ").join("%20")

            var qr_generator = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user_text}`;
            message.reply(qr_generator);

        }
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }


};


module.exports.help = {
  name: "qr",
  description: "Get custom qr",
  usage: "[qr code]",
  category: "Fun",
  aliases: [""]
};