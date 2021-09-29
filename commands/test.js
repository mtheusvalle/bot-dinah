const Discord = require("discord.js");
const config = require("../config.json");
const Database = require("@replit/database")

exports.run = async (client, message, args) => {
  const db = new Database()
  
  db.get("Valle").then(value => {"QUE SE FODA"});
};