module.exports.run = async (client, message, args) => {

    // Define variables.
    let answers = ["Yes, totally!", "Perhaps, who knows.", "Most likely.", "Definitely not!", "I wouldn't count on it.", "That's a given.", "Oh, for sure.", "Maybe, not sure.", "Not really."]; // Possible answers.
    let answer = answers[Math.floor(Math.random() * answers.length)]; // Variable which stores the random answer.   

    // Send the message
    message.channel.send(":8ball:  |  " + answer);

}

module.exports.info = {

    // Set the command name.
    name: "eball"

}