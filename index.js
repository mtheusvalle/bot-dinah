const express = require('express');
const app = express();
const { prefix } = require("../config.json");
const scrapeIt = require("scrape-it");

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
 
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

// const request = require('request')

// const urlList = ["https://www.google.com", "https://www.amazon.com", "https://polentaoffroad.com/", "http://www.batistadelima.adv.br/"];

// function getStatus(url) {
//     return new Promise((resolve, reject) => {
//         request(url, function(error, response, body) {
//             resolve({site: url, status: (!error && response.statusCode == 200) ? "OK": "Down: " + error.message});
//         });
//     })   
// }

// let promiseList = urlList.map(url => getStatus(url));

// Promise.all(promiseList).then(resultList => {
//     resultList.forEach(result => console.log("Result: ", result));
// });

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de 
client.queues = new Map();

//comandos
client.on('message', async message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);  
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }

  
});

client.on("guildMemberAdd", async (member) => { 
  

  let guild = await client.guilds.cache.get("760873727373344828");
  let channel = await client.channels.cache.get("761302161152933888");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === ":roller_coaster:");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você! Sai daqui saco pelado.");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Boas-vindas`)
      .setImage("https://www.google.com/url?sa=i&url=https%3A%2F%2Fgfycat.com%2Fsecondbossyfrilledlizard&psig=AOvVaw07X2Gye2_RTxPuvC0Lz6gG&ust=1601665833893000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOD6lauMlOwCFQAAAAAdAAAAABAD")
      .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco! :heart:\n Um servidor totalmente democrático aonde o autoritarismo não reina
      Here's Brasil\n Ps: Beto Carreiro > Disney`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Xandão forever")
      .setTimestamp();

    channel.send(embed);
  }
});

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token