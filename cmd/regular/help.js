const Discord = require('discord.js');
const name = require('./info/name')
const desc = require('./info/description')
const usage = require('./info/usage')

module.exports.run = async (client, message, args) => {

    // General help command, no command specified.
    if (!args[0]) {

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
  
        message.member.send(embedHelp);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!");

    } else { // If a command was specified.

        let cName = name.command[args[0]];
        let cDesc = desc.command[args[0]];
        let cUsage = usage.command[args[0]];

        if(cName == null)
            return message.channel.send(':interrobang:  |  Please provide a valid command!\n:interrobang:  |  **Usage:** .help [command]');

        const helpCommand = new Discord.RichEmbed()
            .setAuthor("Cat   |   Help", client.user.avatarURL)
            .setColor("#7d4586")
            .setFooter("Nova, the universal magic bot. Made by Sei.", client.user.avatarURL)
            .addBlankField(true)
            .addField('The ' + cName + ' command.', cDesc)
            .addBlankField(true)
            .addField("Usage:", cUsage)
            .addBlankField(true)
  
        message.member.send(helpCommand);
        message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary on the specified command!");
  
    }
    
}

module.exports.info = {

    // Set the command name.
    name: "help"

}

function newFunction(args) {
    return `${args[0]}`;
}
