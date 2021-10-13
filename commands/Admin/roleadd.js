const { MessageEmbed } = require("discord.js");
const ownerID = "813890066781962271"
module.exports = {
  name: "roleadd",
  category: 'mod',
  description: "Add a role to a member",
  usage: "m/roleadd <member mention/id> <role mention/role id>",
  aliases: ['role add', 'radd',],
  run: async (bot, message, args) => {

    if (!message.member.hasPermission(["MANAGE_ROLES"]) && !ownerID.includes(message.author.id)) return message.channel.send("You dont have permission to perform this command!")

    let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!rMember) return message.channel.send("Please provide a user to add a role too.")

    let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()

    if (!role) return message.channel.send("Please provide a role to add to said user.")


    if (!message.guild.me.hasPermission(["MANAGE_ROLES"])) return message.channel.send("I don't have permission to perform this command. Please give me Manage Roles Permission!")

    if (rMember.roles.cache.has(role.id)) {

      return message.channel.send(`${rMember.displayName}, already has the role!`)

    } else {

      await rMember.roles.add(role.id).catch(e => console.log(e.message))
      let embed1 = new MessageEmbed()
      .setTitle("<a:success:879246323570843728> Success <a:success:879246323570843728>")
      .setDescription(`<@${rMember.id}> has been added to **${role.name}**`)
      .setFooter("Bot Developer: akg#9426 | Prefix: p!")
      message.channel.send(embed1)

    }

  },
};