const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "oldhelp",
  description: "Shows all commands of the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: true,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle(" <:discord:890767059108134942>  Here are my commands")
      .setDescription("<a:796348332897206282:891242363626848317> ** *Uptimer* Is An Free Discord Bot That Allows You To Make Your Projects ( Bot ) Online 24/7 Just By Using A Single Command.**")
      .addField(
        "<a:867324402151718932:892090597433823323>  **ADMIN**",
        "`ban` `unban` `kick` `addemoji`"
      )
      .addField(
        "<:IconStatusWebIdle:891464654839222352> **GENERAL**",
        "`servericon` `calculator` `invite` `membercount`"
      )
      .addField(
        " <a:760603876649992262:891240973009580053> **GIVEAWAY**",
        "`gstart` `gend` `greroll`"
      )
      .addField(
        "<:736686100613038182:892889434926759976> **INFO**",
        "`avatar` `report-bug` `developer` `help` `howtouse` `info` `serverinfo`"
      )
      .addField(
        "<:5473blurplemoderator:891453066501587005> **MODERATION**",
        "`lockchannel` `purge` `slowmode` `unlockchannel`"
      )
      .addField(
        "<a:867324413267542026:892078131765190686> **OWNER**",
        "`eval` `reload` `serverlist`"
      )
      .addField(
        "<:MangaUptime:892911673822834689>  **UPTIME**",
        "`add` `calc` `ping` `projects` `remove` `stats` `total`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("BOT DEVELOPERS: Manga Portal| Prefix: *")

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('❤️ Invite Me') 
      .setURL("https://discord.com/api/oauth2/authorize?client_id=874987342547521597&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('❓ Support Server') 
      .setURL("https://discord.gg/G5NdMVfSrT");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('▶️ Tutorial Video') 
      .setURL("https://www.youtube.com/channel/UCklFSsAzjJO8GTXc3J_vbOA");


      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};