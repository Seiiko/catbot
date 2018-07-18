const dogFacts = require('dog-facts');

module.exports.run = async (client, message, args) => {

  // Define the fact variable.
  let randomFact = dogFacts.random();

  // Send the fact.
  message.channel.send(":dog:  |  " + randomFact);

}

module.exports.info = {

  // Set the command name.
  name: "dogfact"

}