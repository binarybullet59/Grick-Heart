const Discord = require('discord.js')
module.exports = {
    name: 'help',
    description: "help command",
    execute(message, args){
        if (message.member.roles.cache.find(r => r.name === "DM")) {
            const helpEmbedDM = new Discord.MessageEmbed()
                .setColor('#1eacb0')
                .setTitle('Help is here!')
                .setDescription('How to use Grick Heart! (For DMs)')
                .addFields(
                    { name: 'Initiative: ', value: "Help with 'init' command"},
                )
                .addField("Starting the Round", "use ``!init start`` to start the round", true)
                .addField("Reseting the Round", "use ``!init reset`` to reset the round", true)
                .addField("Stopping the Round", "use ``!init stop`` to stop the round", true)
                .addFields(
                    { name: "Spells: ", value: "Help with the 'spell' command"},
                )
                .addField("Finding a spell", "use ``!spell <spellname>`` to find a spell from the archive", true)
                .addFields(
                    { name: "Rolling Dice:", value: "Help with the 'roll' command"},
                )
                .addField("Getting a dice roll", "use ``!roll d<4,6,8,10,12,20,100>`` to get the appropriate dice roll", true)
                .addFields(
                    { name: "Managing Players on the Game Table:", value: "Help with the 'table' command"},
                )
                .addField("Adding Players", "use ``!table add <player>`` to add someone to the table", true)
                .addField("Removing Players", "use ``!table remove <player>`` to remove someone from the table", true)
                .addFields(
                    { name: 'Additional Help: ', value: "Contact hydrostaticcog#2330 or join our Discord Server for additional help" },
                )
            message.author.send(helpEmbedDM)
        } if (message.member.roles.cache.find(r => r.name === "Game Access")) {
            const helpEmbedP = new Discord.MessageEmbed()
                .setColor('#1eacb0')
                .setTitle('Help is here!')
                .setDescription('How to use Grick Heart! (For Players)')
                .addFields(
                    { name: 'Initiative: ', value: "Help with 'init' command"},
                )
                .addField("Rolling the Dice", "use ``!init roll <modifiers>`` to roll for initiative", true)
                .addField("How to know when to roll", "Whenever your DM tells you or when you see ``@everyone, please roll for initiative`` from this bot", true)
                .addFields(
                    { name: "Spells: ", value: "Help with the 'spell' command"},
                )
                .addField("Finding a spell", "use ``!spell <spellname>`` to find a spell from the archive", true)
                .addFields(
                    { name: "Rolling Dice:", value: "Help with the 'roll' command"},
                )
                .addField("Getting a dice roll", "use ``!roll d<4,6,8,10,12,20,100>`` to get the appropriate dice roll", true)
                .addFields(
                    { name: 'Additional Help: ', value: "Contact either your Dungeon Master or hydrostaticcog#2330 for help" },
                )
            message.author.send(helpEmbedP)
        }
        
    }
}
