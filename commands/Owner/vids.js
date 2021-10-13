const { Discord, MessageEmbed } = require("discord.js")
module.exports = {
  name: "video",
  aliases: [],
  category: "owner",
  description: "Evaluates the code you put in but it's only available for the my Developer and no one else!!!!!",
  ownerOnly: true,
  run: async (bot, message, args) => {
    let embed = new MessageEmbed()
      .setTitle("━━━━<a:699646515815121528:874908062509563945> Download Links <a:699646515815121528:874908062509563945>━━━━━" )
      .setDescription("ᴀᴋɢ#9426")
      .setThumbnail("https://cdn.discordapp.com/attachments/880668962772353085/880691253694590996/9dab33520c0aef40e77357f217c05a3f.jpg")
      .addField("<a:arrowegp:880688156180107294> DropDown Roles | Credits: https://github.com/Nuggies-bot", "> [Click here for repl](https://replit.com/@akg1111/DropDown-Roles?v=1)")
      .addField("<a:arrowegp:880688156180107294> Invite Manager | Credits: https://github.com/TheShadowGamer ", "> [Click here for repl](https://replit.com/@akg1111/Invite-Manager-1?v=1)")
      .addField("<a:arrowegp:880688156180107294> Button Music Bot | Credits: https://discord.gg/B2mQ8BGdVj ", "> [Click here for repl](https://replit.com/@akg1111/MUSICBOT-WITHBUTTONS-XD-1?v=1)")
      .addField("<a:arrowegp:880688156180107294> Even Better Music Bot | Credits: https://discord.com/invite/2YEcB3D7eNg ", "> [Click here for repl](https://replit.com/@akg1111/Music-Bot-With-Buttons-3?v=1)")
      .addField("<a:arrowegp:880688156180107294> Giveaway Bot | Credits: discord.gg/blob ", "> [Click here for repl](https://replit.com/@akg1111/Giveaway-Bot-With-Req?v=1)")
      .setColor("cccfff")
      .setImage("https://cdn.discordapp.com/attachments/880668962772353085/880690352695156776/preview-809801-iOaI8ITZlyrfjJ9U-small.png")

    message.channel.send(embed)
    
  }
}