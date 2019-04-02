const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
   
   client.user.setGame('https://www.twitch.tv/emmelymf');

});

 client.on("guildMemberAdd", (member) => 
 {
     messageToSend = "Bienvenido " + member.user + "! <:POGGERS:539490934115794975> ";
     client.channels.get('539501533553754123').sendMessage(messageToSend);
 });
 client.on("guildMemberRemove", (member) => 
 {
     messageToSend = member.user.username + " ha salido del servidor, adios popo! <:FeelsBadMan:539490900976599060>";
     client.channels.get('539501533553754123').sendMessage(messageToSend);
 });

let prefix = process.env.PREFIX;

client.on("message", (message) => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

   if (message.content.startsWith(prefix + "twitter")){
   message.channel.send('');
 }else
  if (message.content.startsWith(prefix + 'del')) {
  if (!message.member.roles.find("name", "Mods")) return message.reply('No tienes permiso de usar este comando.');{
    const user = message.mentions.users.first();
    const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
    if (!amount) return message.reply('Especifica la cantidad de mensajes que deseas borrar');
    if (!amount && !user) return message.reply('Especifica un usuario y cantidad de mensajes');
    message.channel.fetchMessages({
        limit: amount,
    }).then((messages) => {
        if (user) {
            const filterBy = user ? user.id : Client.user.id;
            messages = messages.filter(m => m.author.id === filterBy).arary().slice(0, amount);
        }
        message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
       //Puede eliminar el message.channel.send que se encuentra abajo si lo desea, es opcional.
        message.channel.send("¡Adios popo :poop: !");
    });
}}else
 if (message.content.startsWith(prefix + "insta")){
   message.channel.send('https://www.instagram.com/emmelylizeth/');
 }else
 if (message.content.startsWith(prefix + "twitch")){
   message.channel.send('https://www.twitch.tv/emmelymf');
 
}else
 if (message.content.startsWith(prefix + "youtube")){
   message.channel.send('https://www.youtube.com/channel/UCyl6WgshW4d8mHLIVZB_yIQ');
 
}else
 if (message.content.startsWith(prefix + "videos")){
   message.channel.send('@everyone aqui pueden mandar los videos que quieren que veamos en stream <:uff:539490942898536448>');
 }else
 if(message.content.startsWith(prefix + 'avatar')){
   let img = message.mentions.users.first()
   if (!img) {

       const embed = new Discord.RichEmbed()
       .setImage(`${message.author.avatarURL}`)
       .setColor(10371071)
       .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
       message.channel.send({ embed });

   } else if (img.avatarURL === null) {

       message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");

   } else {
       
       const embed = new Discord.RichEmbed()
       .setImage(`${img.avatarURL}`)
       .setColor(10371071)
       .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
       message.channel.send({ embed });
       }
 }else
    if(message.content.startsWith(prefix + 'caracola')){

       var rpts = ["Sí", "No", "Tal vez", "No sé", "Definitivamente NO", " ¡Claro! "," Probablemente "," No "," Por supuesto! "," Por supuesto que no ", "Definitivamente NO"];
       if (!arguments) return message.reply(`Escriba una pregunta.`);
       message.channel.send(message.member.user+' Mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
 
    }else
    if (message.content.startsWith(prefix + "banned")){
      message.channel.send("<:BAN:539490906097582101><:NED:539490907721039888>", {file:"https://cdn.discordapp.com/attachments/421867754480599050/468529032494055454/O3DHIA5.gif"});
       
}else
    if (message.content.startsWith(prefix + "chicas")){
      message.channel.send(":heartpulse: Las chicas Super Poderosas :heartpulse: ", {file:"https://cdn.discordapp.com/attachments/539507084543131648/562558355386662922/unknown.png"});
       
}else 
    if(message.content.startsWith(prefix + 'amor')){
        let users = message.mentions.users.map(m => m.username).join(' y ');
     if(!users) return message.channel.send('Mencione a dos usuarios para calcular');
    
     const random = Math.floor(Math.random() * 100);
     let heard = "";
 
    if(random < 50){
        heard=':broken_heart:';

    }else if(random < 80){
        heard=':sparkling_heart: ';
        
    }else if(random < 101){
        heard=':heart:';

    }
            
      const embed = new Discord.RichEmbed()
          .setAuthor('El porcentaje de amor de '+users+' es:')
          .setDescription(heard+' **'+random+' %**'+' '+heard)
          .setColor(16716947)

        message.channel.send({embed});
    }else
    if (message.content.startsWith(prefix + "bner")){
      message.channel.send(' \n'+
      'Ayudemos a mantener un ambiente sano cumpliendo con las siguientes __**REGLAS:**__ \n'+
      ' \n'+
      '**1)** Los canales son de libre opinión, pero no se permitirán comentarios inapropiados. Cuidar el uso de palabras que puedan ser mal interpretadas por otros usuarios o de contexto obsceno.\n'+
      ' \n'+
      '**2)** Está terminantemente prohibido compartir contenido de carácter político, pornográfico o gore (Incluyendo contenido NSFW).\n'+
      ' \n'+
      '**3) **Está prohibido el Racismo/Discriminación/Faltas de Respeto contra otros usuarios en este servidor.\n'+
      ' \n'+
      '**4)** No Spam! \n'+
      ' \n'+
      ':star2: **REDES SOCIALES** :star2: \n'+
      ':small_blue_diamond:  <https://www.twitch.tv/emmelymf> \n'+
      ':small_blue_diamond:  <https://www.instagram.com/emmelylizeth> \n');
       
    }else
        if (message.content.startsWith(prefix + "fierro")){
      message.channel.send('Pariente! <:PowerUpL:539539511865245726><:OhMyDog:539539508212006912><:PowerUpR:539539515501445130>');
       
    }else
        if (message.content.startsWith(prefix + "ber2")){
      message.channel.send(':hearts:  **BIENVENIDOS** :hearts:', {file:"https://cdn.discordapp.com/attachments/261204184307728384/539507509732442115/panel-411372051-image-e5747b2e-8258-4c7f-b8f0-7af374951511.jpg"});
       
    }else
        if(message.content.startsWith(prefix + "help")){
     
   message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
   message.author.send('**Comandos de EmmelyBOT**\n'+
                       '-> '+prefix+'avatar <@user> | Muestra el avatar de un usuario.\n'+
                       '-> '+prefix+'fierro .\n'+
                       '-> '+prefix+'caracola <pregunta> | El bot respondera a tus preguntas (8ball).\n'+
                       '-> '+prefix+'amor <@user> y <@user> | Muestra el amor que tienes entre dos personas .\n'+
                       '-> '+prefix+'insta | Instagram.\n'+
                       '-> '+prefix+'twitch | Twitch.\n'+
                       '-> '+prefix+'banned| banned.gif.\n'+
                       '-> '+prefix+'del <cantidad> | borra los mensajes (SOLO MODERADORES).\n'+
                       '-------------------------------------------------------------------------------------\n'+
                       '**EmmelyBOT - Bot Oficial del servidor**\n');
    }
});
client.login(process.env.TOKEN);
