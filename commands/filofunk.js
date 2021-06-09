 const Discord = require('discord.js');
 const poesia = require("../poesia.json");

 exports.run = async (client, message, args) => {

  var rand = Math.floor(Math.random() * poesia.length);
   
  var poesiaNow = poesia[rand]

  var embed = new Discord.MessageEmbed()

        .setColor('#ff0000')
        .setTitle(poesiaNow.estrofe)
        .setDescription(poesiaNow.poesia)
        .addFields(
          { name: "Poeta", value: poesiaNow.poeta },
        )
        .addField('Hino', `https://www.youtube.com/watch?v=${poesiaNow.youtubeId}`, true)
        .setTimestamp();
  
  message.channel.send(embed);

 };