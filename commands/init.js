const Discord = require('discord.js')
module.exports ={
    name: "init",
    description: "this command handles game initative",
    args:  true,
    aliases: ['initiative'],
    execute(message, args){
        let noPerms = "You don't have permission to do that!"
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        if (args[0] === 'start') {
            if(message.member.roles.cache.find(r => r.name === "DM")) {
                let initiativeOrder = "null"
                message.channel.send("Initiative started")
                message.channel.send('@everyone, please roll for initative')
                let initiativeRunning = "true"
            } else {
                message.channel.send(noPerms)
            }
        }
        if (args[0] === 'stop') {
            if(message.member.roles.cache.find(r => r.name === "DM")) {
                let initiativeOrder = "null"
                message.channel.send("Initiative stopped")
                let initiativeRunning = "false"
            } else {
                message.channel.send(noPerms)
            }
        }
        if (args[0] === 'reset') {
            if(message.member.roles.cache.find(r => r.name === "DM")) {
                let initiativeOrder = "null"
                message.channel.send('@everyone, please roll for initiative')
            } else {
                message.channel.send(noPerms)
            }
        }
        if (args[0] === 'help') {
            if(message.member.roles.cache.find(r => r.name === "DM")) {
                const helpEmbedDM = new Discord.MessageEmbed()
                    .setColor('#1eacb0')
                    .setTitle('Help for Initative (DM version)')
                    .setDescription('How to use the Initiative command')
                    .addFields(
                        { name: 'Starting the Round: ', value: "use ```!init start``` to start the round" },
                        { name: 'Stoping the Round: ', value: "use ```!init stop``` to stop the round" },
                        { name: 'Reseting the Order: ', value: "use ```!init reset``` to reset the round" },
                        { name: 'Additional Help: ', value: "After ```!init start``` the players will need to do ```!initiative roll <modifiers>``` to get their initiative rolled"},
                    )
                message.author.send(helpEmbedDM)
            } if (message.member.roles.cache.find(r => r.name === "Game Access")) {
                const helpEmbedPL = new Discord.MessageEmbed()
                    .setColor('#1eacb0')
                    .setTitle('Help for Initative (Player version)')
                    .setDescription('How to use the Initiative command')
                    .addFields(
                        { name: 'Rolling for initiative: ', value: "When you see ```@ everyone, please roll for initiative``` execute: ```!init roll <modifiers>``` to get you initiative number" },
                        { name: 'Additional Help: ', value: "Contact your DM for more information regarding how your initiative works"},
                    )
                message.author.send(helpEmbedPL)
            } else {
                message.channel.send(noPerms)
            }
        }
        if (args[0] === 'roll') {
            if (message.member.roles.cache.find(r => r.name === "Game Access")) {
                if (!args[1].length) {
                    let modifiers = 0
                } if (args[1].length) {
                    let modifiers = args[1]
                }
                let initiativeNumber = Math.floor(Math.random() * Math.floor(19)+ 1 + modifiers)
                message.reply("Your initiative number is: " + initiativeNumber)
            } if(message.member.roles.cache.find(r => r.name === "DM")) {
                if (!args[1]) { let modifiers = 0}
                else {
                    let modifiers = args[1]
                }
                let initiativeNumber = Math.floor(Math.random() * Math.floor(19)+ 1 + modifiers)
                message.reply("Your initiative number is: " + initiativeNumber)
            } else {
                message.channel.send(noPerms)
            }
        }
    }
}