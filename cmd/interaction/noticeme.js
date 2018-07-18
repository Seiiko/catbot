module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:innocent:  |  <@!` + message.author.id + `> wants to be noticed by <@!` + member.user.id + `>!`, {
        file: "https://i.imgur.com/y5pLsKy.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "noticeme"

}