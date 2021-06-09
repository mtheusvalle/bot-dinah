const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  
  var array1 = [ 
    "https://tenor.com/view/xandao-xand%C3%A3o-doublebiceps-biceps-gif-18306463",
    "https://tenor.com/view/xand%C3%A3o-gif-18422883",
    "https://tenor.com/view/xandao-heroi-gif-18528011",
    ];

    var rand = Math.floor(Math.random() * array1.length);

    message.channel.send(array1[rand]);
  
};