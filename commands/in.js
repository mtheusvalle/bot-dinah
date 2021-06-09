const Discord = require("discord.js")
const axios = require('axios');

exports.run = async (client, message, args) => {
  
  var array1 = [ "BLA", "BLABLA"
  //   //Não
  // "https://tenor.com/view/shannon-sharpe-shay-nope-nah-nuhuh-gif-12298561", "https://tenor.com/view/inauguration-cnn2017-donald-trump-finger-wag-no-gif-7576946", "https://tenor.com/view/no-way-dont-no-nope-gif-11993606", "https://tenor.com/view/tracey-morgan-no-hell-no-gif-11585244",
  // "https://tenor.com/view/no-nooo-nope-eat-fingerwag-gif-4880183",
  // "https://tenor.com/view/no-gif-10041199",
  // "https://tenor.com/view/no-negative-gif-9965065",
  // "https://tenor.com/view/no-gif-4544032",
  // "https://tenor.com/view/no-homer-gif-10137067",
  // "https://tenor.com/view/steve-carell-no-please-no-gif-5026106",
  // "https://tenor.com/view/batman-no-nope-not-gif-3556197",
  // "https://tenor.com/view/err-no-n%c3%a3o-not-nope-gif-17361558",
  //   //Sim 
  // "https://tenor.com/view/yes-dog-indeed-nod-gif-10818519", "https://tenor.com/view/ron-pearlman-the-goon-yes-yep-anchorman-gif-12449331", "https://tenor.com/view/yes-minions-movie-minions-gi-fs-minions-gif-5026357", "https://tenor.com/view/yes-nod-yup-gif-3425893", "https://tenor.com/view/nodding-nod-yes-oh-yes-gif-8068244", "https://tenor.com/view/yes-sir-spongebob-thumbs-up-gif-13785783", "https://tenor.com/view/grilla-yes-hell-thumbs-up-grills-gif-10889686", 
  // "https://tenor.com/view/jana-janataffarel-taffarel-janaina-janainataffarel-gif-13335686",
  // "https://giphy.com/gifs/yes-jon-hamm-agree-11a8FLrVeoLnna",
  // "https://tenor.com/view/forsure-sure-gif-9998754",
  // "https://tenor.com/view/yes-melb-agt-americas-got-talent-agtgifs-gif-4519427",
  // "https://tenor.com/view/pode-p%c3%a1-a%c3%adsim-paquera-paquerando-senzualizando-gif-12854976",
  // "https://tenor.com/view/obviously-hell-yeah-oh-yeah-yes-agreed-gif-11743455"
  ];

  /*var array1 = [ "Sim", "Não", "Claro", "Negativo", "Óbvio", "Não to afim de responder", "Pergunta lá no posto ipiranga" ];*/

  async function returnJSON(){
    const response = await axios.get(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
    return response;
  }
  
  async function answer(){
    const api = await returnJSON()
    console.log(answerQuestion)
  }

  var rand = await Math.floor(Math.random() * array1.length);

  await message.channel.send(array1[rand]);
  
  answer()
};