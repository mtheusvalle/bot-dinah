const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  
  const user = message.author.id;

  var embed = new Discord.MessageEmbed()

        .setColor('#48f442')
        .setTitle('**RANKING DOS MAIS GADOS DO BETO CARRERO WORLD**')
        .addFields(
          { name: ':first_place: Rafael Almeida', value: '\u200B' },
          { name: ':second_place: Evandro Carvalho', value: '\u200B' },
          { name: ':third_place: Bruno Chieza', value: '\u200B' },
        )
        .setTimestamp();
  
  message.channel.send(embed);
}