const Discord = require("discord.js");
const config = require("../config.json");
const Database = require("@replit/database")
const adapter = new FileSync('../banco.json')

exports.run = async (client, message, args) => {
  const db = new Database()
  
  
  db.set("user").then(() => {
    "name": `${message.author.username}`,
    "money": '500'
  });

  console.log(db["user"]["name"])
};