const Discord = require('discord.js');
const beautify = require('beautify');

module.exports = {
  name: "eval",
  aliases: ["e", "evaluate"],
  category: "owner",
  description: "Evaluates the code you put in but it's only available for the my Developer and no one else!!!!!",
  ownerOnly: true,

  run: async (bot, message, args) => {

    if (!args[0]) {
      return;
    }

    try {
      if (args.join(" ").toLowerCase().includes("token")) {
        return message.reply("( う-´)づ︻╦̵̵̿╤── (˚☐˚”) MY TOKEN...MINE!")
      }

      const toEval = args.join(" ");
      const evaluated = eval(toEval);

      let embed = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setTimestamp()
        .setFooter(bot.user.username)
        .setTitle("Eval")
        .addField("To Evaluate", `\`\`\`js\n${beautify(args.join(" "), { format: "js" })}\n\`\`\``)
        .addField("Evaluated:", `\`\`\`${evaluated}\`\`\``)
        .addField("Type of:", `\`\`\`${typeof (evaluated)}\`\`\``);

      message.channel.send(embed);

    } catch (e) {
      let embed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle(`:x: Error!`)
        .setDescription(e)

      message.channel.send(embed);

    }

  }

}