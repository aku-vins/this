const oneLine = require('common-tags').oneLine;
const fetch = require('node-fetch');
var emoji = require("emojilib") // A JSON file containing emoji and their English meanings.
emoji = emoji.lib;

module.exports.run = async (bot, message, args) => {
        var text = args;
        if (args.length < 1) {
            message.reply("Make sure to add some search terms so I know what emojis to get you :eyes:\nEg: sonic emoji v");
        }

        else {

            var search_terms = text.join(" ");
            console.log(search_terms)
            for (var j = 0; j < search_terms.length; j += 1) {
                var reply = "";
                let search_term = search_terms[j]
                let char_matched_emojis = getEmoji(search_term, emoji)
                
                if (char_matched_emojis.length > 0) {
                    message.reply(`${search_term} emoji: ${char_matched_emojis.join(" ")}`)
                }
                else {
                    message.reply(`No emoji found for ${search_term}`);
                }
            }
    
        }

        function getEmoji(search_term, emoji) {
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
                    for (var j = 0; j < keywords.length; j += 1) {

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

    }



module.exports.help = {
  name: "emoji",
  description: "Search emojis",
  usage: "[emoji]",
  category: "Info",
  aliases: ["emoj"]
};