module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send message while avatar is being processed.
    let msg = await message.channel.send("Generating avatar...");

    if (!member){

        // Send the message author's avatar picture.
        message.channel.send({files: [

            {
                attachment: message.author.displayAvatarURL,
                name: "avatar.png"
            }

        ]});

        // Delete the inital message.
        msg.delete()

        // Cancel the command.
        return;

    }

    // Send the message author's avatar picture.
    message.channel.send({files: [

        {
            attachment: member.user.displayAvatarURL,
            name: "avatar.png"
        }

    ]});

    // Delete the inital message.
    msg.delete()
    

}

module.exports.info = {

    // Set the command name.
    name: "avatar"

}