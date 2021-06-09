const Discord = require('discord.js');
const scrapeIt = require("scrape-it");
const delay = require('delay');

module.exports.run = async (client, message, args) => {

  // Promise interface
  scrapeIt("https://globoesporte.globo.com/esports/", {
    articles: {
        listItem: ".bastian-feed-item"
        , data: {
            title: ".feed-post-link"
            , link: {
                selector: "a.feed-post-link"
                , attr: "href"
            }
            , description: ".feed-post-body-resumo"
            , imagem: {
                selector: ".bstn-fd-picture-image"
                , attr: "src"
            }
            , time: ".feed-post-datetime"
        }
    }
}).then( async ({ data, response }) => {
    console.log(`Status Code: ${response.statusCode}`)

    var nt = data.articles;
    var qt = data.articles.length;
    i = 0;

    while(i <= qt){
      await delay(1500)
      var embed = new Discord.MessageEmbed()

      .setColor('#008000')
      .setTitle(nt[i].title)
      .setThumbnail(nt[i].imagem)
      .setDescription(nt[i].description)
      .setURL(nt[i].link)
      .setFooter(nt[i].time);

      message.channel.send(embed);
    
    i++;
    }
  })
}