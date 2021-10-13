const simplydjs = require('simply-djs')
const Discord = require("discord.js")

module.exports = {
  name: "help",
  aliases: [""],
  usage: "unban",
  description: "unbans member",


  run: async (client, message, args) => {
    let embed1 = new Discord.MessageEmbed()
      .setTitle('** <:709602052216586250:892889434654113863> Help Panel <:709602052216586250:892889434654113863>**')
      .setDescription('<a:781464789263581185:891241010695401552> ** *Manga Portal*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "<:709732482320171023:892889434805121024> COMMAND CATEGORIES",
        "**<:709602052216586250:892889434654113863>ADMIN\n<:709602052216586250:892889434654113863> GENERAL\n<:709602052216586250:892889434654113863>GIVEAWAY\n<:709602052216586250:892889434654113863> INFO\n<:709602052216586250:892889434654113863>IMAGE\n<:709602052216586250:892889434654113863> MODERATION\n<:709602052216586250:892889434654113863>OWNER\n<:709602052216586250:892889434654113863> FUN\n<:709602052216586250:892889434654113863> UPTIMER**")
      .setThumbnail("https://cdn.discordapp.com/icons/866084687029076019/062d4c2ccc89574c5a61191fa2244cca.webp")
      .setImage('https://cdn.discordapp.com/attachments/894594341694210088/895982291132776448/standard_25.gif')
      .setFooter('Bot Made By Manga Portal| Prefix: *')

    let embed2 = new Discord.MessageEmbed()
      .setTitle('** <:709602052216586250:892889434654113863> Help Panel <:709602052216586250:892889434654113863>**')
      .setDescription('<:709602052216586250:892889434654113863> ** *Manga Portal*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        " <:5473blurplemoderator:891453066501587005> MODERATION",
        "`ban` `unban` `kick` `addemoji` `addrole` `removerole` `announce` `setnick` `resetnick` `ticket` `lockchannel` `purge` `slowmode` `mute` `unmute` `nuke` `resetwarns` `warn` `warnings`")
      .setThumbnail("https://cdn.discordapp.com/icons/866084687029076019/062d4c2ccc89574c5a61191fa2244cca.webp")
      .setImage('https://cdn.discordapp.com/attachments/894594341694210088/895982291132776448/standard_25.gif')
      .setFooter('Bot Made By Manga Portal| Prefix: *')
    let embed3 = new Discord.MessageEmbed()
      .setTitle('** <:709602052216586250:892889434654113863> Help Panel <:709602052216586250:892889434654113863>**')
      .setDescription('<:709602052216586250:892889434654113863> ** *Manga Portal*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "<:709732482320171023:892889434805121024> GENERAL",
        "`servericon` `calculator` `invite` `membercount` `help` `serverinfo` `leaderboard`")
      .setThumbnail("https://cdn.discordapp.com/icons/866084687029076019/062d4c2ccc89574c5a61191fa2244cca.webp")
      .setImage('https://cdn.discordapp.com/attachments/894594341694210088/895982291132776448/standard_25.gif')
      .setFooter('Bot Made By Manga Portal| Prefix: *')
    let embed4 = new Discord.MessageEmbed()
      .setTitle('** <:709602052216586250:892889434654113863> Help Panel <:709602052216586250:892889434654113863>**')
      .setDescription('<:709602052216586250:892889434654113863> ** *Manga Portal*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "<:709732482320171023:892889434805121024> GIVEAWAY",
        "`gstart` `gend` `greroll`")
      .setThumbnail("https://cdn.discordapp.com/icons/866084687029076019/062d4c2ccc89574c5a61191fa2244cca.webp")
      .setImage('https://cdn.discordapp.com/attachments/894594341694210088/895982291132776448/standard_25.gif')
      .setFooter('Bot Made By Manga Portal| Prefix: *')
    let embed5 = new Discord.MessageEmbed()
      .setTitle('** <:709602052216586250:892889434654113863> Help Panel <:709602052216586250:892889434654113863>**')
      .setDescription('<:709602052216586250:892889434654113863> ** *Manga Portal*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "<:709732482320171023:892889434805121024> INFO",
        "`avatar` `bug-report` `feedback` `developer` `help` `howtouse` `info` `serverinfo` `position` `urban` `weather` `status` `channelinfo` `rolememberinfo`")
      .setThumbnail("https://cdn.discordapp.com/icons/866084687029076019/062d4c2ccc89574c5a61191fa2244cca.webp")
      .setImage('https://cdn.discordapp.com/attachments/894594341694210088/895982291132776448/standard_25.gif')
      .setFooter('Bot Made By Manga Portal| Prefix: *')
    let embed6 = new Discord.MessageEmbed()
      .setTitle('** <:709602052216586250:892889434654113863> Help Panel <:709602052216586250:892889434654113863>**')
      .setDescription('<:709602052216586250:892889434654113863> ** *Manga Portal*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "<:709732482320171023:892889434805121024> IMAGE",
        "`tweet` `deepfry` `eject` `meme` `kangaroo` `dog` `cat` `changemymind` `fire` `respect` `scary`")
      .setThumbnail("https://cdn.discordapp.com/icons/866084687029076019/062d4c2ccc89574c5a61191fa2244cca.webp")
      .setImage('https://cdn.discordapp.com/attachments/894594341694210088/895982291132776448/standard_25.gif')
      .setFooter('Bot Made By Manga Portal| Prefix: *')
    let embed7 = new Discord.MessageEmbed()
      .setTitle('** <:709602052216586250:892889434654113863> Help Panel <:709602052216586250:892889434654113863>**')
      .setDescription('<:709602052216586250:892889434654113863> ** *Manga Portal*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "<:709732482320171023:892889434805121024> FUN",
        "`rps` `coinflip` `meme` `reverse` `hangman` `tictactoe` `trivia` `fact` `Shuffle-guess`")
      .setThumbnail("https://cdn.discordapp.com/icons/866084687029076019/062d4c2ccc89574c5a61191fa2244cca.webp")
      .setImage('https://cdn.discordapp.com/attachments/894594341694210088/895982291132776448/standard_25.gif')
      .setFooter('Bot Made By Manga Portal| Prefix: *')
    let embed8 = new Discord.MessageEmbed()
      .setTitle('** <:709602052216586250:892889434654113863> Help Panel <:709602052216586250:892889434654113863>**')
      .setDescription('<:709602052216586250:892889434654113863> ** *Manga Portal*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "<:709732482320171023:892889434805121024> UPTIME",
        "`add` `calc` `ping` `projects` `remove` `stats` `total`")
      .setThumbnail("https://cdn.discordapp.com/icons/866084687029076019/062d4c2ccc89574c5a61191fa2244cca.webp")
      .setImage('https://cdn.discordapp.com/attachments/894594341694210088/895982291132776448/standard_25.gif')
      .setFooter('Bot Made By Manga Portal| Prefix: *')
    



    let pages = [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8] // REQUIRED

    // its still possible without embed
    // let pages = ['page1', 'page2', 'page3']

    simplydjs.embedPages(client, message, pages, {
      firstEmoji: '⏪', // default: ⏪
      backEmoji: '◀️', // default: ◀️
      delEmoji: '🗑️', // default: 🗑️
      forwardEmoji: '▶️', // default: ▶️
      lastEmoji: '⏩', // default: ⏩

      btncolor: 'grey', // default: green 
      delcolor: 'red', // default: red
      skipcolor: 'grey', // default: blurple
      // Colors that discord-buttons support. like red, blurple, grey, green

      skipBtn: true,
    })
  }
}
