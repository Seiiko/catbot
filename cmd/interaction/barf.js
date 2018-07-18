module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:nauseated_face:  |  <@!` + message.author.id + `> is barfing at  <@!` + member.user.id + `>!`, {
        file: "http://i0.kym-cdn.com/photos/images/original/001/110/533/dff.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "barf"

}