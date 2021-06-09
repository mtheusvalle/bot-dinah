const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  var array1 = [args[0], args[1]];

  var rand = Math.floor(Math.random() * array1.length);

  if (!args[0] || (args[0].toLowerCase() == " " && args[1].toLowerCase() == " ")) {
    message.reply("insira **OPÇÃO1** e **OPÇÃO2** na frente do comando.");
  } 
  else if(!args[1] || (args[1].toLowerCase() == " " && args[1].toLowerCase() == " ")) {
    message.reply("insira no mínimo 2 opções para o sorteio");
  }

  message.channel.send("Eu escolheria **" + array1[rand] + "**");
};