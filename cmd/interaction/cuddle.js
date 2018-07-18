module.exports.run = async (client, message, args) => {

    // Define the member variable.
    let member = message.mentions.members.first();

    // Send the info message to the current channel.
    message.channel.send(`:baby:  |  <@!` + message.author.id + `> is cuddling with  <@!` + member.user.id + `>!`, {
        file: "http://mrwgifs.com/wp-content/uploads/2013/04/Snuggling-Cuddling-Anime-Girls-Gif-.gif"
    });

}

module.exports.info = {

    // Set the command name.
    name: "cuddle"

}