const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  var width = args[0];
  var height = args[1];

    message.channel.send(`https://picsum.photos/${width}/${height}`);

};