const config = {
    bot : {
	token: process.env.TOKEN, 
        id: "bot id" 
   },
    sunucu : {
	ip: "sunucu ip", 
        isim: "sunucu isim" 
   },
    kanal : {
	aktif: true,
	id: "ses kanal id", 
	yazi: "⚡・Aktif üye sayısı: {online}" 
   },
    durum : {
	mesaj: "Şu anda sunucumuzda {online} kişi aktif olarak bulunuyor. ⭐" 
   },
    ticket : {
        
        parentOpened: "destek kategori id", 

        Category1: "Minecraft Sorunları", 
        Category2: "Bulduğunuz Buglar", 
        Category3: "Şikayetler", 
          
        roleSupport: "destek yetkili rol id",
            
        logsTicket: "destek log kanal id", 
        ticketChannel: "destek kanal id" 
    }
}
module.exports = config
