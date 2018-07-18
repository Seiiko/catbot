const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix

const client = new Discord.Client();

// SETUP THE DEPENDENCIES
const fs = require("fs"); // File system dependency.
const ytdl = require("ytdl-core"); // YouTube core dependency.
const MusicBot = require('discord.js-musicbot-addon'); // Music bot dependency.

// SETUP THE COMMANDS COLLECTION
client.commands = new Discord.Collection();

// READ THE REGULAR COMMANDS FOLDER
fs.readdir("./cmd/regular", (err, files) => {
  if(err) console.error(err);

  // Filter .js files.
  let jsFiles = files.filter( f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0) {
    console.log("No commands to load.");
    return;
  }

  // Load the commands
  console.log(`Loading ${jsFiles.length} regular commands.`);
  jsFiles.forEach((f, i) => {

    let props = require(`./cmd/regular/${f}`);
    console.log(`${i + 1}: ${f} loaded.`);
    client.commands.set(props.info.name, props);

  });

});

// READ THE ADMIN COMMANDS FOLDER
fs.readdir("./cmd/admin", (err, files) => {
  if(err) console.error(err);

  // Filter .js files.
  let jsFiles = files.filter( f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0) {
    console.log("No commands to load.");
    return;
  }

  // Load the commands
  console.log(`Loading ${jsFiles.length} admin commands.`);
  jsFiles.forEach((f, i) => {

    let props = require(`./cmd/admin/${f}`);
    console.log(`${i + 1}: ${f} loaded.`);
    client.commands.set(props.info.name, props);

  });

});

// READ THE BOT OWNER COMMANDS FOLDER
fs.readdir("./cmd/owner", (err, files) => {
  if(err) console.error(err);

  // Filter .js files.
  let jsFiles = files.filter( f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0) {
    console.log("No commands to load.");
    return;
  }

  // Load the commands
  console.log(`Loading ${jsFiles.length} bot owner commands.`);
  jsFiles.forEach((f, i) => {

    let props = require(`./cmd/owner/${f}`);
    console.log(`${i + 1}: ${f} loaded.`);
    client.commands.set(props.info.name, props);

  });

});

// READ THE FUN COMMANDS FOLDER
fs.readdir("./cmd/fun", (err, files) => {
  if(err) console.error(err);

  // Filter .js files.
  let jsFiles = files.filter( f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0) {
    console.log("No commands to load.");
    return;
  }

  // Load the commands
  console.log(`Loading ${jsFiles.length} fun commands.`);
  jsFiles.forEach((f, i) => {

    let props = require(`./cmd/fun/${f}`);
    console.log(`${i + 1}: ${f} loaded.`);
    client.commands.set(props.info.name, props);

  });

});

// READ THE INTERACTION COMMANDS FOLDER
fs.readdir("./cmd/interaction", (err, files) => {
  if(err) console.error(err);

  // Filter .js files.
  let jsFiles = files.filter( f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0) {
    console.log("No commands to load.");
    return;
  }

  // Load the commands
  console.log(`Loading ${jsFiles.length} interaction commands.`);
  jsFiles.forEach((f, i) => {

    let props = require(`./cmd/interaction/${f}`);
    console.log(`${i + 1}: ${f} loaded.`);
    client.commands.set(props.info.name, props);

  });

});

client.on("ready", async () => {

    console.log(`Bot is ready! ${client.user.username}`);
    client.user.setPresence({ game: { name: 'Seii\'s tracks', type: 0 } }); // Set the bot's status.

    try {

        let link = await client.generateInvite(["ADMINISTRATOR"]);
        console.log(link);

    } catch(e) {

        console.log(e.stack);

    }

});

// WELCOME NEW MEMBERS
client.on("guildMemberAdd", member => { // Listener event: user joining the server.
      
    // Defining the variables.
    const embedCommands = new Discord.RichEmbed() // Create a constant referring to the embed message.
      .setTitle('Check out Seii\'s YouTube channel.')
      .setAuthor('Cat   |   Help', client.user.avatarURL)
      .setColor('#7d4586')
      .setDescription('For help with a specific command, type \'c:help [command]\'.')
      .setFooter('Cat, the bot. Made by Seii.', client.user.avatarURL)   
      .setURL('https://www.youtube.com/c/seiitunes')
      .addBlankField(true)
      .addField('Regular Commands','c:avatar   |   c:help   |   c:info   |   c:ping   |   c:userinfo')
      .addBlankField(true)
      .addField('Fun Commands','c:catfact  |   c:coinflip   |   c:dieroll   |   c:dogfact  |   c:eball   |   c:repeat   |   c:motiv   |   c:puppy   |   c:rate')
      .addBlankField(true)
      .addField('Interaction Commands','c:barf   |   c:cuddle   |   c:handhold   |   c:hug   |   c:kiss   |   c:noticeme   |   c:pat   |   c:poke   |   c:pout   |   c:punch   |   c:shrug   |   c:slap   |   c:tickle')
      .addBlankField(true)
      .addField('Music Commands','c:play   |   c:stop   |   c:pause   |   c:resume   |   c:skip   |   c:volume   |   c:queue   |   c:clearqueue')
      .addBlankField(true)
      .addField('Admin Commands','c:ban   |   c:kick   |   c:mute   |   c:purge   |   c:say   |   c:unmute')
      .addBlankField(true)
      .addField('Bot Owner Commands','c:bavatar   |   c:nick   |   c:status   |   c:utag')
      .addBlankField(true)
  
    // Sending the messages.
    member.send("**Welcome to Seii's Discord Server!** \nBe sure to introduce yourself, before the fun starts. We're happy to have you here, and we hope you have a nice time here.");
    member.send(":white_check_mark:  |  Here's a list of all the commands of the bot! Write \"c:help [command name]\" to get specific help with that command.");
    member.send(embedCommands);
      
});

// COMMAND HANDLER
client.on("message", async message => {

   // Ignore other bots, including itself.
   if(message.author.bot) return;
  
   // Ignore messages without prefix.
   if(message.content.indexOf(prefix) !== 0) return;

   // Separate the "command" name, and our "arguments" for the command.
   let raw = message.content.split(/ +/g);
   let command = raw[0];
   let args = raw.slice(1);

   // Define the command variable.
   var cmd = client.commands.get(command.slice(prefix.length));

   // Check if the command exists.
   if (cmd)
    cmd.run(client, message, args);

});


// SPAM PREVENTION
client.on("message", async message => {

  // Ignore other bots, including itself.
  if(message.author.bot) return;

  // Spam prevention.
  if (talkedRecently.has(message.author.id)) {

   talkedRecently.delete(message.author.id);
   talkedRecently1.add(message.author.id); setTimeout(() => { 
   talkedRecently1.delete(message.author.id); }, 2500);

   } else if (talkedRecently1.has(message.author.id)) {

   talkedRecently1.delete(message.author.id);
   talkedRecently2.add(message.author.id); setTimeout(() => { 
   talkedRecently2.delete(message.author.id); }, 2500);

   } else if (talkedRecently2.has(message.author.id)) {

   talkedRecently2.delete(message.author.id);
   talkedRecently3.add(message.author.id); setTimeout(() => { 
   talkedRecently3.delete(message.author.id); }, 5000);

   } else if (talkedRecently3.has(message.author.id)) {

   talkedRecently2.delete(message.author.id);
   message.channel.send(":no_mouth:  |  Whoa there, cowboy. Slow down! You can type again in 5 seconds.");
   message.member.addRole(message.guild.roles.find("name", "★ Muted ★"));

   function callback(){
    return function(){
      message.member.removeRole(message.guild.roles.find("name", "★ Muted ★"));
      }
   }

   setTimeout(callback(), 5000);
   return;

 } else {

   // Add the member to the set so that they can't talk for 2.5 seconds.
   talkedRecently.add(message.author.id); setTimeout(() => { 
   talkedRecently.delete(message.author.id); }, 2500);

 }

});

client.login(botSettings.token);