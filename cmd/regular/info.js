module.exports.run = async (client, message, args) => {

    // Send the info message to the current channel.
    message.channel.send(":wave:  |  I'm Nova, the Luminus bot!\n:wave:  |  Made by Sei. If you have any suggestion to improve me, make sure to DM her!\n:wave:  |  Version: 1.0.2");

}

module.exports.info = {

    // Set the command name.
    name: "info"

}