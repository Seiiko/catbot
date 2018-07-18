module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:punch:  |  <@!` + message.author.id + `> just punched <@!` + member.user.id + `>! Ouch...`, {
        file: "https://media.giphy.com/media/YjHx1taZwpfd6/giphy.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "punch"

}