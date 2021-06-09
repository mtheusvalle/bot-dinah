const Discord = require("discord.js")
const axios = require('axios');

exports.run = async (client, message, args) => {
  
  if(args[0] == ""){
    axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php')
  .then(function(responseInsta){
    const api = responseInsta.card_images.image_url;
    message.channel.send(api);
    console.log(api)
    }).catch(function (error) {
      console.error(error);
    });
  }
  
}