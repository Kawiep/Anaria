const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "-";

bot.on('ready', function(){
    console.log("Bot Ready");
})
 
bot.on("ready", () => {
  console.log("Connecté sur" + " " + bot.guilds.size + " servers!");
  bot.user.setGame(`>_ Anaria V1.0.0 by Kaw!ep™`, "https://www.twitch.tv/AriaV1")
});

bot.login('NTY0MTIwODI4OTU4OTk4NTQy.XKjRlg.vAyhYPMVu8cfYnPwCQH_pw-uLGE')

bot.on('message', message => {
  
  if (message.content === '-pp') {
   
    message.reply('`Voici ta Photo de Profil,`' + " " + message.author.avatarURL);
  }
});

bot.on('message', message => {
 
  if (message.content === '-help') {
    
    message.reply(':hammer::warning: Command en cours de développement');
  }
});

bot.on('message', message => {
 
  if (message.content === '-stats') {
    
    message.reply('Je suis connecté sur' + " " + bot.guilds.size + " " + 'Serveurs !');
  }
});

bot.on('guildMemberAdd', member => {
  let logChannel = member.guild.channels.find('name', '┌➧『✅』nouveaux');
  
    let logEmbed = new Discord.RichEmbed()
    .setAuthor("Anaria | Logs") 
    .setDescription(member.user.username + " :tada: vien de rejoindre le serveur ! (" + member.user.id + ")")
    .setColor('RANDOM')
    .setFooter("ΛSØЯ ➜ Kaw!ep™#6666", member.user.displayAvatarURL)
    .setTimestamp()
    logChannel.send(logEmbed);
  })
  bot.on('guildMemberRemove', member => {
  let logChannel = member.guild.channels.find('name', '└➧『❌』anciens');
  
    let logEmbed = new Discord.RichEmbed()
    .setAuthor("Anaria | Logs") 
      .setDescription(member.user.username + " :x: vien de quitter le serveur (" + member.user.id + ")")
    .setFooter("ΛSØЯ ➜ Kaw!ep™#6666", member.user.displayAvatarURL)
    .setColor('RANDOM')
    .setTimestamp()
    logChannel.send(logEmbed);
  })

  bot.on('message', message => {
 
    if (message.content === '-stats') {
      
      message.reply('Je suis connecté sur' + " " + bot.guilds.size + " " + 'Serveurs !');
    }
  });
