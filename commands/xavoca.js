const Discord = require("discord.js")
const axios = require('axios');

exports.run = async (client, message, args) => {

  axios.get('https://www.instagram.com/graphql/query/?query_hash=d5d763b1e2acf209d62d22d184488e57&variables=%7B%22shortcode%22%3A%22CI_KjS-MOpt%22%2C%22include_reel%22%3Atrue%2C%22first%22%3A24%7D')
  .then(function(responseInsta){
    const api = responseInsta.data.edges.node.username;

    console.log(api)
  }).catch(function (error) {
      console.error(error);
    });
  
  axios.get(`http://api.icndb.com/jokes/random?firstName=${message.author.username}&lastName=Xavoca`)
  .then(function (response) {
    const jokes = response.data.value.joke;

    var options = {
      method: 'GET',
      url: `https://just-translated.p.rapidapi.com/?lang_from=en&lang_to=pt&text=${jokes}`,
      headers: {
        'x-rapidapi-key': 'f43748e680msh9d1fe2028a70864p13a1b8jsnf07c676c46a9',
        'x-rapidapi-host': 'just-translated.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response2) {
      const xavocs = response2.data.text;
      message.channel.send(xavocs);
    }).catch(function (error) {
      console.error(error);
    });
  });
};