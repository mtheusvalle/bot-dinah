const Discord = require("discord.js");
const config = require("../config.json");
const Database = require("@replit/database")

exports.run = async (client, message, args) => {

const db = new Database()
  
  var wembed = new Discord.MessageEmbed()
        .setColor('#DC3545')
        .setTitle('Apostas abertas brasileirinhos')
        //.addField(`Selecione  :blue_square:  para votar em **${args[0].toUpperCase()}**`)
        //.addField(`Selecione  :red_square:  para votar em **${args[1].toUpperCase()}**`)
        .addFields(
          {name: 'Selecione  :blue_square:  para votar em '+ args[0].toUpperCase() +'', value: '\u200B'},
          {name: 'Selecione  :red_square:  para votar em '+ args[1].toUpperCase() +'', value: '\u200B'}
        )
        .setTimestamp();

  return message.channel.send(wembed);

};