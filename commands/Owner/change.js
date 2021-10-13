const { Discord, MessageEmbed } = require("discord.js");
const ownerid = "852841613625262090";
const disbut = require("discord-buttons");

module.exports = {
  name: "change",
  aliases: [""],
  category: "owner",
  description: "",
  usage: " ",

  run: async (bot, message, args) => {
    if (message.author.id == ownerid) {
      let embed = new MessageEmbed()
        .setFooter("Bot Developer: akg#9426 | Prefix : p!")
        .setTitle("<a:general:873996270098870323> **New Discord Changes Incoming!** <a:general:873996270098870323> ")
        .setDescription("There are some new changes about Discord Server Boosting Coming up!\nThese Changes include:\n> Tier 2 Boosts = 7 boosts instead of 15\n> Tier 3 Boosts = 14 Boosts instead of 30.")
        .addField(
          "<a:offline:879078233147072573> DISCLAIMER<a:offline:879078233147072573> ",
          "These Changes are Still Being Tested and Are Not 100% Confirmed Yet!"
        )
        .setThumbnail("https://cdn.discordapp.com/avatars/876690046487498752/50c204817cd9fc42b1581dcf43042259.webp")
        .setImage("https://cdn.discordapp.com/attachments/876151387459846145/876689128585039932/standard.gif")
      let button1 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel(' • Invite Me')
        .setEmoji("873996108211310592")
        .setURL("https://discord.com/api/oauth2/authorize?client_id=876690046487498752&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
        .setStyle('url')
        .setEmoji('875829492613021716')
        .setLabel(' • Support Server')
        .setURL("https://discord.gg/KRHRYJvEtX");
      let button3 = new disbut.MessageButton()
        .setStyle('url')
        .setEmoji('875835310452400198')
        .setLabel(' • Tutorial Video')
        .setURL("https://www.youtube.com/");


      return message.channel.send(embed, {
        button: [button1, button2, button3],
      });
      message.channel.send(embed)

    } else {
      message.channel.send("Only Owner May Use This Command!")
    }
  }
};  