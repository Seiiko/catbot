module.exports.run = async (client, message, args) => {

    // Define variables.
    let sides = ["1", "2", "3", "4", "5", "6"]; // Possible answers.
    let side = sides[Math.floor(Math.random() * sides.length)]; // Variable which stores the random answer.

    // Send the message
    message.channel.send(":game_die:  |  You got a " + side + "!");

}

module.exports.info = {

    // Set the command name.
    name: "dieroll"

}