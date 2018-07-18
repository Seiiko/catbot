const randomPuppy = require('random-puppy');

module.exports.run = async (client, message, args) => {

    // Send the puppy picture.
    randomPuppy()
      .then(url => {
        message.channel.send(url);
      })

}

module.exports.info = {

    // Set the command name.
    name: "puppy"

}