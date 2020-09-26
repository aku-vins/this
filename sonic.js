const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { sep } = require("path");
const { RichEmbed } = require("discord.js");
const { success, error, warning } = require("log-symbols"); // npm i log-symbols or yarn add log-symbols
// we require the config file
const config = require("./config");
const custom = require("./custom");

// Creating a instance of Client.
const bot = new Client();

// Attaching Config to bot so it can be accessed anywhere.
bot.config = config;

// Creating command and aliases collection.
["commands", "aliases"].forEach(x => bot[x] = new Collection());

// A function to load all the commands.
const load = (dir = "./commands/") => {

	readdirSync(dir).forEach(dirs => {
	// we read the commands directory for sub folders and filter the files with name with extension .js
		const commands = readdirSync(`${dir}${sep}${dirs}${sep}`).filter(files => files.endsWith(".js"));

		// we use for loop in order to get all the commands in sub directory
		for (const file of commands) {
		// We make a pull to that file so we can add it the bot.commands collection
			const pull = require(`${dir}/${dirs}/${file}`);
			// we check here if the command name or command category is a string or not or check if they exist
			if (pull.help && typeof (pull.help.name) === "string" && typeof (pull.help.category) === "string") {
				if (bot.commands.get(pull.help.name)) return console.warn(`${warning} Two or more commands have the same name ${pull.help.name}.`);
				// we add the the comamnd to the collection, Map.prototype.set() for more info
				bot.commands.set(pull.help.name, pull);
				// we log if the command was loaded.
				console.log(`${success} Loaded command ${pull.help.name}.`);

			}
			else {
			// we check if the command is loaded else throw a error saying there was command it didn't load
				console.log(`${error} Error loading command in ${dir}${dirs}. you have a missing help.name or help.name is not a string. or you have a missing help.category or help.category is not a string`);
				// we use continue to load other commands or else it will stop here
				continue;
			}
			// we check if the command has aliases, is so we add it to the collection
			if (pull.help.aliases && typeof (pull.help.aliases) === "object") {
				pull.help.aliases.forEach(alias => {
					// we check if there is a conflict with any other aliases which have same name
					if (bot.aliases.get(alias)) return console.warn(`${warning} Two commands or more commands have the same aliases ${alias}`);
					bot.aliases.set(alias, pull.help.name);
				});
			} 
		} 

	});
};


// we call the function to all the commands.
load();

/**
 * Ready event
 * @description Event is triggred when bot enters ready state.
 */
bot.on("ready", () => {
	console.log("I am online");
  
  
});

bot.on('ready', () => {
    const watching = [
    `${bot.guilds.size} Servers`, 
    `${bot.users.size} Users`,
    `${bot.channels.size} Channels`, 
    "sonic help",
    `discordbot-sonic.glitch.me`
    ]; 
setInterval(function() {
    let watchinging = watching[Math.floor(Math.random() * watching.length)];
    bot.user.setActivity(watchinging, {type: "WATCHING"});

}, 5000)
});
const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

bot.on('message', async message => {
  	const prefix = bot.config.prefix;
  const prefixes = "s!"
	const prefixRegex = new RegExp(`^(<@!?${bot.user.id}>|${escapeRegex(prefix)}|${escapeRegex(prefixes)})\\s*`);
	if (!prefixRegex.test(message.content)) return;

  
	const [, matchedPrefix] = message.content.match(prefixRegex);
	const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
	const cmd = args.shift().toLowerCase();

	let command;
	if (!message.member) message.member = await message.guild.get(message.author);


	if (cmd.length === 0) return;
	if (bot.commands.has(cmd)) command = bot.commands.get(cmd);
	else if (bot.aliases.has(cmd)) command = bot.commands.get(bot.aliases.get(cmd));

	if (command) command.run(bot, message, args);
  
  
});

bot.on("message", async message => {
  const tag = RegExp(`^<@!${bot.user.id}>$`)
  
  if (message.content.match(tag)) {
      const linked = bot.emojis.get("748528659098501140");
  const embed = new RichEmbed()
  .setTitle("Sonic Discord Bot")
  .setDescription(`
Hello! **${message.author.username}**
im Sonic, im discord bot with helpfuly commands
like Fun commands, Economy commands, Info commands, and other
and you can view the command by type \`sonic help\`
`)
  .addField("My official website:", `[Click here!!!](https://discordbot-sonic.glitch.me/) ${linked}`, true)
  .addField("Invite me now!!:", `[Hey click me](https://discord.com/api/oauth2/authorize?client_id=747433438629330996&permissions=305655286&scope=bot) ${linked}`, true)
  .addField("Join our server:", `[Click me!](https://discord.gg/z9vQWuQ) ${linked}`, true)
  .addField("Donate:", `[Click here](https://saweria.co/donate/Vins2106) ${linked}`, true)
  .setColor("BLUE")
  
  message.channel.send(embed)
  }
  
  
});


bot.on("guildCreate", async guild => {
  const linked = bot.emojis.get("748528659098501140");
  const embed = new RichEmbed()
  .setTitle("Sonic Discord Bot")
  .setDescription(`
Thank to inviting me in **${guild.name}** servers.
im Sonic, im discord bot bot with helpfuly commands
like Fun commands, Economy commands, Info commands, and other
and you can view the command by type \`sonic help\`

My official website:
[Website](https://discordbot-sonic.glitch.me/) ${linked}

Invite me now!!:
[Invite](https://discord.com/api/oauth2/authorize?client_id=747433438629330996&permissions=305655286&scope=bot) ${linked}

Join our server!!:
[Our server](https://discord.gg/z9vQWuQ) ${linked}

Donate:
[Donate](https://saweria.co/donate/Vins2106) ${linked}
`)
  .setColor("RANDOM")
  
  guild.owner.send(embed)
  
  
  
});


bot.on("message", async message => {
  
  if (message.content === "hello") {
    const emoji = bot.emojis.get("747454254838710276")
    message.react(emoji)
  }
    if (message.content === "Hello") {
    const emoji = bot.emojis.get("747454254838710276")
    message.react(emoji)
  }
});


bot.login(bot.config.token).catch(console.error());