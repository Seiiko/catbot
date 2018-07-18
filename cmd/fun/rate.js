module.exports.run = async (client, message, args) => {

    // Define variables.
    let grades = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]; // Possible answers.
    let rank = grades[Math.floor(Math.random() * grades.length)]; // Variable which stores the random answer.
    let rateThis = args.join(" "); // What is there to be rated.

    // Totally not scripted.
    if (rateThis === "Sei" || rateThis === "Seiko" || rateThis === "your owner" || rateThis === "my owner")
      return message.channel.send(":thinking:  |  Sei can only be a 10/10!");

    // Send the message
    message.channel.send(":thinking:  |  Hm... I rate " + rateThis + " a " + rank + "/10!");

}

module.exports.info = {

    // Set the command name.
    name: "rate"

}