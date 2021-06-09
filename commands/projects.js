const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  
  const user = message.author.id;

  var embed = new Discord.MessageEmbed()

        .setColor('#48f442')
        .setTitle('**Projetos Valle**')
        .addFields(
          { name: 'Projeto 01 - Calculadora', value: 'https://90sites.netlify.app/01calculadora/calc.html' },

          { name: 'Projeto 02 - Jogo da Memória', value: 'https://90sites.netlify.app/02memory/memory' },
        )
        .setTimestamp();
  
  message.channel.send(embed);
}