const {MessageEmbed, Permissions} = require("discord.js");
const client = global.client;
const config = require("../config.js")
module.exports = {
	name: 'yardım',
	description: 'yardım',
	async execute(message, args) {
        const prefix = config.bot.prefix;
        const help = new MessageEmbed().setAuthor({name: `Komutlar`, iconURL: client.user.displayAvatarURL()}).setColor("RANDOM").setFooter({text: config.sunucu.ip}).setThumbnail(client.user.displayAvatarURL());
        if(message.member.roles.cache.some(role => role.id === config.ticket.roleSupport) || message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
            help.addField(`:military_medal: ${prefix}başarım ▸`, 
                          `Kanala minecraft başarım resmi gönderir.`, true)
              .addField(`:mag_right: ${prefix}kontrol ▸`, 
                        `Sunucu durumunu mesaj şeklinde atar. (online, motd vb.)`, true)
              .addField(`:man_pouting: ${prefix}skin ▸`, 
                        `Belirtilen oyuncunun skinini gösterir.`, true)
              .addField(`:globe_with_meridians: ${prefix}site ▸`, 
                        `Site adresini gönderir.`, true)                  
              .addField(`:key: ${prefix}ip ▸`, 
                        `Sunucu adresini gönderir.`, true)           
              .addField(`:inbox_tray: ${prefix}ekle ▸`, 
                        `Belirtilen kullanıcı destek talebine eklenir.`, true)
              .addField(`:outbox_tray: ${prefix}çıkar ▸`, 
                        `Belirtilen kullanıcı destek talebinden çıkarılır.`, true)
              .setDescription(`> Tüm komutlarımız bu şekildedir. 🎉`);
          message.react("✅")
          message.reply({embeds: [help]})
       //await message*
          //} else {
           // help.addField(`:military_medal: ${prefix}başarım ▸`, 
           ///               `Kanala minecraft başarım resmi gönderir
           //             `, true)
        //  / // /  .addField(`:mag_right: ${prefix}kontrol ▸`, `Sunucu durumunu mesaj şeklinde atar (online, motd vb.)`, true)
            //  .addField(`:man_pouting: ${prefix}skin ▸`, `Belirtilen oyuncunun skinini gösterir.`, true)
          //    .setDescription(`Tüm komutlarımız bu şekildedir.
         // /    bot Ön Eki(prefix): ${prefix}`);
          //  message.channel.send({embeds: [help]})
        }
    },
};
