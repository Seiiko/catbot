module.exports.run = async (client, message, args) => {

  let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#ad5dcd")
    .addField("Full Usertag", `${message.author.username}#${message.author.discriminator}`)
    .addField("Discord Join Date", message.author.createdAt);

  message.channel.send(embed);

}

module.exports.info = {

    // Set the command name.
    name: "userinfo"

}