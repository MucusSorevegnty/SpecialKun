const Discord = require('discord.js')
const bot = new Discord.Client();

var prefix = ("s/");

bot.on('ready', function() {
    bot.user.setGame("s/help");
      console.log("Connected");
    });

    bot.login(process.env.TOKEN);

    bot.on('message', message => {
   if(message.content === prefix + "help"){
        var helpembed = new Discord.RichEmbed()
        helpembed.setDescription("\n__**Liste des commandes**__\n \n`s/unicaract` : donne les caractères unicode ! \n `s/specaract` : donne les caractères les plus spéciaux !\n \n Bot codé par Superyastiquereuros#2049 sur les instances de Azkun#1930. \n")
        helpembed.setColor("0x00FF00")
        helpembed.setFooter("SpecialKun", "https://images-ext-1.discordapp.net/external/3wFRQAiJzFNYsuHTD_Wy-AszUFW_Y4XxP_byYDR93zQ/https/cdn.discordapp.com/avatars/444114765716127747/41b34a9258d87694300714352c7069ab.png?width=80&height=80")
        helpembed.setTimestamp();
        message.channel.send(helpembed);
          }
    if(message.content === "Racompte moi une blague"){
        message.channel.send("Quel est le point commun entre des pattes à la bolo et moi?\nNous sommes tous deux des automates :joy: !")
    }
    if(message.content === prefix + "unicaract"){
        message.channel.send("__**Liste des caractères de l'unicode**__\n ! ☺ ☻ ♥ ♦ ♣ ♠ • ◘ ○ ◙ ♂ ♀ ♪ ♫ ☼ ► ◄ ↕ ‼ ¶ § ▬ ↨ ↑ ↓ → ← ∟ ↔ ▲ ▼ \n # $ % & ' ( ) * + , - . / 0 1 \n 3 4 5 6 7 8 9 : ; < = > ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [  ] ^ _ ` a b c d \n e f g h i j k l m n o p q r s t u v w x y z { | } ~ ⌂  \n Ç ü é â ä à å ç ê ë è ï î ì Ä Å É æ Æ ô ö ò û  \nù ÿ Ö Ü ø £ Ø × ƒ á í ó ú ñ Ñ ª º ¿ ® ¬ ½ ¼ ¡ « ░ ▒ ▓ │ ┤ Á Â À © ╣ ║ ╗ ╝ ¢ ¥ ┐ └ ┴ ┬ ├ ─ ┼ ã Ã ╚ \n░ ▒ ▓ │ ┤ Á Â À © ╣ ║ ╗ ╝ ¢ ¥ ┐ └ ┴ ┬ ├ ─ ┼ ã Ã ╚ ╔ ╩ ╦ ╠ ═ ╬ ¤ ð Ð Ê Ë È ı Í Î Ï ┘ ┌ █ ▄ § Ì ▀ Ó ß Ô Ò õ Õ µ þ Þ Ú Û Ù ý Ý ¯ ´ ± ‗ ¾ ¶ § ÷ ¸ ° ¨ · ¹ ³ ² ■ \n ╔ ╩ ╦ ╠ ═ ╬ ¤ ð Ð Ê Ë È ı Í Î Ï ┘ ┌ █ ▄ § Ì ▀ Ó ß Ô Ò õ Õ µ þ Þ Ú Û Ù ý Ý ¯ ´ ± ‗ ¾ ¶ § ÷ ¸ ° ¨ · ¹ ³ ² ■")
    }
    if(message.content === prefix + "specaract"){
        message.channel.send("__**Liste des caractères Ultra Spéciaux**__: \n ░ ▒ ▓ ╔ ╩ ╦ ╠ ═ ╬ █ ▄▀ ■ ▲ ▼ ┐ └ ┴ ┬ ├ ─ ┼ ╣ ║ ╗ ╝│ ┤∟ ๖   ̶̶̶ζ͜͡")
    }
        });
