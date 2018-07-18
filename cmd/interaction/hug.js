module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:blush:  |  <@!` + member.user.id + `> is being hugged by <@!` + message.author.id + `>!`, {
        file: "https://m.popkey.co/edbc5e/jZVdb.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "hug"

}