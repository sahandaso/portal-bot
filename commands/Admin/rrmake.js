const simplydjs = require('simply-djs')
module.exports = {
  name: "rr",
  aliases: ["rr make"],
  usage: "",
  description: "",
  run: async (client, message, args) => {
    // interactionCreate event
    simplydjs.clickBtn(interaction)

    // messageCreate event
    // setup-btnrole command
    simplydjs.btnrole(client, message, {
      embed: embed,
      data: [
        {
          role: '878033763760762891',
          label: 'test', // default: *role name*
          color: 'blurple', // default: SECONDARY
          emoji: '876344855612248064',
        }, // etc..
      ],
    })
  }
}

