module.exports.run = async (client, message, args) => {

    // Send the info message to the current channel.
    message.channel.send(":wave:  |  I'm Cat, the Seii Server bot!\n:wave:  |  Made by Seii. If you have any suggestion to improve me, make sure to DM them!\n:wave:  |  Version: 1.0.0");

}

module.exports.info = {

    // Set the command name.
    name: "info"

}