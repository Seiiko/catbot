module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:point_left:  |  <@!` + member.user.id + `> has been poked by <@!` + message.author.id + `>!`, {
        file: "https://78.media.tumblr.com/913f6c8b397a28cce5d739d9e5440f13/tumblr_on0ks5LR3P1ridyfoo1_500.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "poke"

}