const Discord = require("discord.js")
const axios = require('axios');

exports.run = async (client, message, args) => {
  
  var options = {
      method: 'GET',
      url: 'https://www.instagram.com/graphql/query/?',
      headers: {
        'query_hash': 'd5d763b1e2acf209d62d22d184488e57',
        'variables': '%7B%22shortcode%22%3A%22CI_KjS-MOpt%22%2C%22include_reel%22%3Atrue%2C%22first%22%3A24%7D'
      }
    };

    axios.request(options).then(function (response) {
      const xavocs = response.data.edges.node.username;
      message.channel.send(xavocs);
    }).catch(function (error) {
      console.error(error);
    });
};