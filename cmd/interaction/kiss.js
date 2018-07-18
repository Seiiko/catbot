module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:kissing_heart:  |  <@!` + member.user.id + `> and <@!` + message.author.id + `> are kissing!`, {
        file: "https://media1.giphy.com/media/bGm9FuBCGg4SY/giphy.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "kiss"

}