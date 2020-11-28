const Discord = require('discord.js')
module.exports = {
    name: 'help',
    description: "help command",
    execute(message, args){
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#1eacb0')
            .setTitle('Help is here!')
            .setDescription('How to use Grick Heart!')
            .addFields(
                { name: 'Initiative: ', value: "Help with 'init' command"},
            )
            .addField("Starting the Round", "use ```!init start``` to start the round", true)
            .addField("Reseting the Round", "use ```!init reset``` to reset the round", true)
            .addField("Stopping the Round", "use ```!init stop``` to stop the round", true)
            .addField("Rolling for Initiative", "use ```!init roll <modifier>``` to get your initiative roll", true)
            .addFields(
                { name: "Spells: ", value: "Help with the 'spell' command"},
            )
            .addField("Finding a spell", "use ```!spell <spellname>``` to find a spell from the archive", true)
            .addFields(
                { name: "Rolling Dice", value: "Help with the 'roll' command"},
            )
            .addField("Getting a dice roll", "use ```!roll d<4,6,8,10,12,20,100>``` to get the appropriate dice roll", true)
            .addFields(
                { name: 'Additional Help: ', value: "Contact either your Dungeon Master or hydrostaticcog#2330 for help" },
            )
        message.author.send(helpEmbed)
    }
}
