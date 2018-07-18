module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:frowning:  |  <@!` + message.author.id + `> is pouting at <@!` + member.user.id + `>...`, {
        file: "http://i.imgur.com/A3vDoIJ.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "pout"

}