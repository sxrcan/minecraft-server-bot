const { Client, Intents ,Collection } = require('discord.js');
//const acarkre = require('acarkre');
//acarkre(client, {
 //   konsolBilgi: true,
 //  /küfürEngel: true,
 ////   reklamEngel: true,
  //  uyarıMesajı: true, 
//    izinliKanallar: [],
  //  izinliRoller: [],
 //   kufurUyariMesaj: "Birdaha küfür etmemelisin aksi taktirde ceza alacaksın.", 
//    reklamUyariMesaj: "Birdaha reklam yapmamalısın aksi taktirde ceza alacaksın."
//});
const Discord = require('discord.js');
const fs = require('fs')
const config = require("./config.js")
const client = (global.client = new Client({ fetchAllMembers: true, fetchGuilds: true, fetchVanity: true, intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]}));
//const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); 
/* Tüm Intent adları için https://github.com/discordjs/discord.js/blob/stable/src/util/Intents.js#L46 */
client.commands = new Collection();
client.invites = new Collection();
client.cooldown = new Map();

client.discord = Discord;
client.config = config;

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

  client.on('messageCreate', async message => {
  let prefix = config.bot.prefix
  let id = config.bot.id
    if (message.content === `<@${id}>`) {
        message.reply(`Selam 👋🏻, sanırım bana seslendin. Komutlarımı görmek istersen \`${prefix}yardım\` yazabilirsin. 🎉`)
    }});

//client.on("message", async (msg) => {
//  if (!msg.guild || msg.author.id === client.user.id) return;
 // let reklamKoruma = true;

//  if (reklamKoruma) {
//    try {
//      const kelime = ["discord.gg", "discord.me", "discordapp.com", "discord.io", "discord.tk"];
 //     if (kelime.some(reklam => msg.content.includes(reklam))) {
 //       if (msg.member.permissions.has(8)) return
 ////       msg.channel.send(`Hey ${msg.author}, sunucuda link paylaşamazsın!`).then(ozixd => ozixd.delete({ timeout: 3000 }));
//        if (msg.deletable) msg.delete({
//          timeout: 200
//        }).catch(err => {});
//      } else {
 //       let links = msg.content.match(/(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}?\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/gi);
//        if (!links) return;
//        if (msg.member.permissions.has(8)) return
/////        if (msg.deletable) msg.delete({
//          timeout: 200
  //      }).catch(err => {});
//  /      msg.channel.send(`Hey ${msg.author}, sunucuda link paylaşamazsın!`).then(ozixd => ozixd.delete({ timeout: 3000 }));
 //     }
 //   } catch (err) {}

//  }
//})

//client.on("messageUpdate", async (oldMsg, newMsg) => {
 // if (!newMsg.guild || newMsg.author.id === client.user.id) return;
  //let reklamKoruma = true;
 // if (reklamKoruma) {
//    try {
 //  //   if (newMsg.member.permissions.has(8)) return
  //    const kelime = ["discord.gg", "discord.me", "discordapp.com", "discord.io", "discord.tk"];
   //   if (kelime.some(reklam => newMsg.content.includes(reklam))) {
  //      newMsg.channel.send(`Hey ${newMsg.author}, sunucuda link paylaşamazsın!`).then(ozixd => ozixd.delete({ timeout: 3000 }));
  // //     if (newMsg.deletable) newMsg.delete({
  //        timeout: 200
  //      }).catch(err => {});
  //    } else {
  //      let links = newMsg.content.match(/(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}?\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/gi);
   //     if (!links) return;
   //     if (newMsg.deletable) newMsg.delete({
   //       timeout: 200
    //    }).catch(err => {});
  //      newMsg.channel.send(`Hey ${newMsg.author}, sunucuda link paylaşamazsın!`).then(ozixd => ozixd.delete({ timeout: 3000 }));
  //    }
 //   } catch (err) {}
//
 // }
//});

client.login("OTc4NDk5MDgzNTk1NTc5NDU0.G3mryV.KpG011P9cVj5LY_0WeylmjIH-T-Col6djIIiLo")
