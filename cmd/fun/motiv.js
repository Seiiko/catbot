const motivQuotes = require('motivational-quotes');

module.exports.run = async (client, message, args) => {

  // Define the quote varibale.
  let randomQuote = motivQuotes.random();

  // Send the quote.
  message.channel.send(randomQuote + ".");

}

module.exports.info = {

    // Set the command name.
    name: "motiv"

}