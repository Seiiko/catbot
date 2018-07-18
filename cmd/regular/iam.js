module.exports.run = async (client, message, args) => {

    // Define the mutee and muted role variables.
    let user = message.member;
    let nRole = message.guild.roles.find("name", "★ NSFW ★");

    if(args[0] === 'NSFW') {

        // If the member already has the muted role, send a warning message.
        if(user.roles.has(nRole.id))
        return message.channel.send(":warning:  |  You already have the NSFW role!");

        // Mute the member.
        await user.addRole(nRole);
        message.channel.send(`:white_check_mark:  |  You now have access to the NSFW channel.`);
    
    } else {

        return message.channel.send(":interrobang:  |  The only self-assignable role right now is 'NSFW'!");

    }


}

module.exports.info = {

    // Set the command name.
    name: "iam"

}