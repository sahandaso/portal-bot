const { Client, Message, Util, MessageEmbed } = require("discord.js")

module.exports = {
  name: "steal",
  aliases: ["addemoji"],
  usage: "steal emoji",
  description: "steals an emoji",
  run: async (client, message, args) => {
    const simplydjs = require('simply-djs')
    // message event
    // steal command
    if (!args[0]) {
      let embed1 = new MessageEmbed()
        .setTitle("<a:error:878521122524626945> Please Specify an Emoji To Steal! <a:error:878521122524626945>")
        .setFooter("BOT DEVELOPERS: Akg#9426| Prefix: *")
        message.channel.send(embed1)
    } else {
      let embed2 = new MessageEmbed()
        .setTitle("<a:success:878523444164165642> Emoji Succesfully Stolen! <a:success:878523444164165642>")
        .setFooter("BOT DEVELOPERS: Akg#9426| Prefix: *")
        
      simplydjs.stealEmoji(message, args, {
        embedTitle: 'Emoji Added ;)', // default: `Emoji Added ;)`
        embedColor: 'FF0000', //default: #075FFF;
        embedFoot: "BOT DEVELOPERS: Akg#9426| Prefix: *", // default: 'Stop stealing.. its illegal.'
        failedMsg: 'sorry emoji not found' //default: "Couldn't find an emoji from it"
      
      })
    }
  }
}
