module.exports.run = async (client, message, args) => {

    // Check if there the member is valid.
    let member = message.mentions.members.first(); // Define the member variable.
    if (!member) // If the member doesn't exist.
      return message.author.send(":interrobang:  |  This member doesn't exist! \n:interrobang:  |   **Usage:** .report [member] [reason]"); // Send message to the user.

    // Get the reason.
    let reason = args.slice(1).join(' '); // Define the reason variable.
    if (!reason) // If there's no reason.
      return message.author.send(":interrobang:  |  Please provide a valid reason for the report. \n:interrobang:  |   **Usage:** .report [member] [reason]"); // Send message to the user.

    // Delete the message.
    message.delete();

    // Send the message to the security channel.
    const secChannel = client.channels.find("name", "security-reports"); //Create a variable referring to the selected channel.
    // Sending the message.
    secChannel.send(`:warning:  |  <@!` + member.user.id + `> has been reported by <@!` + message.author.id + `>. \n:warning:  |  Reason: ${reason}`);

}

module.exports.info = {

    // Set the command name.
    name: "report"

}