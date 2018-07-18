module.exports.run = async (client, message, args) => {

    // Define the message variable.
    let emoji = args[0];

    // Check if the argument is a number.
    if (isNaN(args[1])) {
      return message.channel.send(":question:  |  That's not a valid number. \n:question:  |  Usage: .repeat [message] [desired number]");

    }

    // Send the message.
    message.channel.send(emoji.repeat(args[1]));

}

module.exports.info = {

    // Set the command name.
    name: "repeat"

}