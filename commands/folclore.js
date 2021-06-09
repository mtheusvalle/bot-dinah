const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  const list = [
  "**Personagens do Folclore Brasileiro**",
  "Anhangá",
  "Ao Ao",
  "Besta Fera",
  "Boitatá",
  "Boi Vaquim",
  "Boto Cor-de-rosa",
  "Capelobo",
  "Cobra grande",
  "Corpo-seco e Bradador",
  "Cuca",
  "Curupira",
  "Gorjala",
  "Iara",
  "Ipupiara",
  "Jaci Jeterê",
  "Kurupira",
  "Labatut",
  "Lobisomen",
  "Mapinguari",
  "Matinta Pereira",
  "Mboi Tu'i",
  "Moñai",
  "Mula sem Cabeça",
  "Negro D”água",
  "Onça Celeste (Charia)",
  "Papa-figo",
  "Pisadeira",
  "Quibungo",
  "Teju Jagua",
  "Saci Pererê",
  "Luisón",
  "\n\n Fonte: https://segredosdomundo.r7.com/31-personagens-do-folclore-brasileiro-como-voce-nunca-viu"
  ]
  message.channel.send(list);
}