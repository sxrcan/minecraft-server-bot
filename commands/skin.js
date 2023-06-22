const Discord = require("discord.js");
const client = global.client;
const config = require("../config.js")
module.exports = {
	name: 'skin',
	description: 'skin',
	async execute(message, args) {
        let mesaj = args.slice(1).join(' ')
        let member = message.mentions.members.first()
        if (!args[0]) return message.reply(`:x: Bir seçenek belirtmelisin. Seçenekler \`avatar\`, \`kafa\`, \`vücut\` veya \`skin\` şeklinde olmalıdır. \`${config.bot.prefix}skin kafa Sefa_GK\``)
        if (!mesaj) return message.reply(`:x: Bir kullanıcı adı belirtmelisin. \`${config.bot.prefix}skin kafa nick\``);
        if (mesaj == member) return message.reply(`:x: Bu bir kullanıcı adı değil, bir kullanıcı adı belirtmelisin.`)

        if (args[0] == 'avatar') {
            const webAttachment = new Discord.MessageAttachment(`https://mc-heads.net/avatar/${mesaj}.png`, `${mesaj}.png`)
            message.reply({files: [webAttachment]})
        }

        if (args[0] == 'kafa') {
            const webAttachment = new Discord.MessageAttachment(`https://mc-heads.net/head/${mesaj}.png`, `${mesaj}.png`)
            message.reply({files: [webAttachment]})
        }

        if (args[0] == 'vücut') {
            const webAttachment = new Discord.MessageAttachment(`https://mc-heads.net/body/${mesaj}.png`, `${mesaj}.png`)
            message.reply({files: [webAttachment]})
        }

        if (args[0] == 'png') {
            const webAttachment = new Discord.MessageAttachment(`https://mc-heads.net/skin/${mesaj}.png`, `${mesaj}.png`)
            message.reply({files: [webAttachment]})
        }
    },
}
