module.exports.run = async (client, message, args) => {

    // Define variables.
    let coinSides = ["tails", "heads"]; // Possible answers.
    let coinSide = coinSides[Math.floor(Math.random() * coinSides.length)]; // Variable which stores the random answer.

    // Send the message
    message.channel.send(":slot_machine:  |  You got " + coinSide + "!");

}

module.exports.info = {

    // Set the command name.
    name: "coinflip"

}