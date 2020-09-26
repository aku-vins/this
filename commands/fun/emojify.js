const oneLine = require('common-tags').oneLine;
const emoji = require("emojilib")

module.exports.run = async (bot, message, args) => {
        var word = args;
        var keys = Object.keys(emoji.lib);

        var msg_array = word.join(" ");
        
        var msg_array_length = msg_array.length;

        var emojified_msg = "";
        var char_matched_emojis = [];

        for (var i = 0; i < msg_array.length; i += 1) {
            char_matched_emojis = [];
            var word = msg_array[i];

            char_matched_emojis = getEmoji(word, emoji, message);

            if (char_matched_emojis.length > 0) {
                // Get random matched emojis
                var randomNumber = getRandomNumber(0, char_matched_emojis.length - 1);
                var randomEmoji = char_matched_emojis[randomNumber]
                emojified_msg += ` ${word} ${randomEmoji}`
            }
            else {
                emojified_msg += ` ${word}`
            }
        }
        message.channel.send(emojified_msg);

        function getEmoji(search_term, emoji, msg) {
            var keys = Object.keys(emoji);
        
            var matched_emojis = [];
            var char_matched_emojis = [];
            for (var k = 0; k < keys.length; k += 1) {
                var keywords = emoji[keys[k]]["keywords"];
                if (keys[k] === search_term) {
                    matched_emojis.push(keys[k])
                    char_matched_emojis.push(emoji[keys[k]]["char"])
                }
                else {
                    for (var j = 0; j < keywords; j += 1) {
        
                        if (keywords[j] === search_term) {
                            matched_emojis.push(keys[k])
                            char_matched_emojis.push(emoji[keys[k]]["char"])
        
                        }
                    }
                }
        
            }
            return char_matched_emojis;
        }
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    };


module.exports.help = {
  name: "spacetext",
  description: "",
  usage: "[text]",
  category: "Fun",
  aliases: ["spt"]
};