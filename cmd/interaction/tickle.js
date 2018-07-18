module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:point_right:  | <@!` + member.user.id + `> is being tickled by <@!` + message.author.id + `>!`, {
        file: "http://i0.kym-cdn.com/photos/images/original/000/948/122/f23.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "tickle"

}