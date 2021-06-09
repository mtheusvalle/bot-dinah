const Discord = require("discord.js");
const config = require("../config.json");
const Database = require("@replit/database")

exports.run = async (client, message, args) => {
  const db = new Database()
  
  
  let list = await db.get("user");
  console.log(list)
  message.channel.send(' '+ list +' ')

};