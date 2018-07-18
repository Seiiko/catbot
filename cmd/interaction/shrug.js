module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:shrug:  |  <@!` + message.author.id + `> is shrugging at  <@!` + member.user.id + `>!`, {
        file: "https://media1.tenor.com/images/8e74b7dbfadfd639c35cfddf33252bbd/tenor.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "shrug"

}