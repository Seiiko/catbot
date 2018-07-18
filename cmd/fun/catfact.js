const catFacts = require('cat-facts');

module.exports.run = async (client, message, args) => {

  // Define the fact variable.
  let randomFact = catFacts.random();

  // Send the fact.
  message.channel.send(":smiley_cat:  |  " + randomFact + ".");

}

module.exports.info = {

  // Set the command name.
  name: "catfact"

}