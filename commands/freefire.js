const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  
  const user = message.author.id;

  var xings = [
  "Sai daqui o espantalho do fandangos", 
  "Sai fora paquita do capeta", 
  "Não vem aqui com esse seu bafo de bunda", 
  "Como você fala bosta, parece uma metralhadora de bosta", 
  "Lá vem o sofa de zona", 
  "Você é mais insignificante do que um filhote de lombriga", 
  "Não me olha com essa cara de cu com cãimbra", 
  "Enfia um rojão no cu e sai voando", 
  ]
  var elogios = [
    "Te amo gatão",
    "Olá Sr. Matheus Valle",
    "Maravilhoso",
    "Gostoso",
    "Gatão",
    "Lindo"
  ]
    var rand = Math.floor(Math.random() * xings.length);

      message.channel.send("JOGO DE CORNO");
}