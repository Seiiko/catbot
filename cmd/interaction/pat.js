module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:hand_splayed:  |  <@!` + message.author.id + `> is patting  <@!` + member.user.id + `>!`, {
        file: "https://media1.tenor.com/images/68d981347bf6ee8c7d6b78f8a7fe3ccb/tenor.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "pat"

}