 const Discord = require('discord.js');
 const config = require("../config.json");

 exports.run = async (client, message, args) => {
   
    var user = message.mentions.members.first();
    
    let reason = args.slice(1).join(' ');

    var wembed = new Discord.MessageEmbed()
        .setColor('#DC3545')
        .setAuthor(`${message.author.username} tente novamente, assim`)
        .addField(`**${config.prefix}voteban {membro}** **{motivo}**`, "substitua `{membro}` pelo membro que deseja banir e `{motivo}` pelo motivo")
        .setTimestamp();

    if (!args[0]) {return message.channel.send(wembed);}
    
    var mencion = user.user.username;

    var embed = new Discord.MessageEmbed()

        .setColor('#48f442')
        .setAuthor(`${message.author.username} está votando para banir ${mencion}`)
        .setDescription(`**Motivo:** ${reason}`)
        .setImage(`https://imgur.com/7sj1SwQ.gif`)
        .setTimestamp();

    var botmessage = message.reply(`está votando para banir ${mencion}`,embed).then(embedMessage => {
      var favor = embedMessage.react("👍");
      var against = embedMessage.react("👎");
      

      let myGreeting = setTimeout(function sayHi() {
      if(favor > against){message.reply(`${mencion} Foi banido do servidor!`)}
      console.log(conta)
      }, 5000)

      });
 };