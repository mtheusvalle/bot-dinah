const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  
  const user = message.author.id;

  var embed = new Discord.MessageEmbed()

        .setColor('#48f442')
        .setTitle('**Comandos**')
        .addFields(
          { name: '?betin', value: 'Descrição do servidor' },
          { name: '?folclore', value: 'Lista de personagens do folclore brasileiro' },
          { name: '?freefire', value: 'Sincera opnião sobre o jogo Combustão Instantânea sem fins comerciais' },
          { name: '?gado', value: 'Ranking dos mais gados do servidor' },
          { name: '?in', value: 'Pergunte ao Bot Dináh e ele te dara a certeza sobre toda a humanidade humana' },
          { name: '?lol', value: 'Sincera opnião sobre o jogo Liga das Lendas' },
          { name: '?mcpoze', value: 'Preciso falar nada' },
          { name: '?projects', value: 'Alguns projetos simples criados pelo God Valle' },
          { name: '?say', value: 'Uma conversa saudável com o Bot' },
          { name: '?sort', value: 'Insira duas opções e o Bot Dináh te dara a certeza da vida' },
          { name: '?superxandao', value: 'Aqui é xandão' },
          { name: '?voteban', value: 'Martelo do Ban (é meme, no betin carrero a democracia reina )' },
        )
        .setTimestamp();
  
  message.channel.send(embed);
}