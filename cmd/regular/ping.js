module.exports.run = async (client, message, args) => {

    // Calculate the user's ping.
    const m = await message.channel.send("And..."); // Temporary message while calculating the ping.
    m.edit(`:ping_pong:  |  Your ping is ${m.createdTimestamp - message.createdTimestamp}ms.`) // Edit the message to show the user's ping.

}

module.exports.info = {

    // Set the command name.
    name: "ping"

}