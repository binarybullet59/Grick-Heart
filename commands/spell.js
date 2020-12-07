const Discord = require('discord.js')
const data = require('../dnd-data/spells/spells.json')
module.exports = {
    name: 'spell',
    description: "This command looks up spells",
    execute(message, args){
        if (!args.length) {
            message.reply(`You didn't provide any arguments!`);
            logger.error('No arguements provided in !spell command');
            return
        } else if (args[0] === args[0]) {
            let spellName1 = data[args[0]].name
            let spellSource1 = data[args[0]].source
            let spellLevel1 = data[args[0]].level
            let spellSchool1 = data[args[0]].school
            let spellTime1 = data[args[0]].time
            let spellRange1 = data[args[0]].range
            let spellComponents1 = data[args[0]].components
            let spellDuration1 = data[args[0]].duration
            let spellText1 = data[args[0]].text
            let spellName = JSON.stringify(spellName1)
            let spellSource = JSON.stringify(spellSource1)
            let spellLevel = JSON.stringify(spellLevel1)
            let spellSchool = JSON.stringify(spellSchool1)
            let spellTime = JSON.stringify(spellTime1)
            let spellRange = JSON.stringify(spellRange1)
            let spellComponents = JSON.stringify(spellComponents1)
            let spellDuration = JSON.stringify(spellDuration1)
            let spellText = JSON.stringify(spellText1)
            const spellEmbed = new Discord.MessageEmbed()
                .setColor('#1eacb0')
                .setTitle('Info on ' + spellName1)
                .setDescription('Sourced from' + spellSource)
                .addFields(
                    { name: 'Name: ', value: spellName },
                    { name: 'Spell Level: ', value: spellLevel },
                    { name: 'Spell School: ', value: spellSchool},
                    { name: 'Spell Action Time: ', value: spellTime},
                    { name: 'Components Needed: ', value: spellComponents},
                    { name: 'Duration of Spell: ', value: spellDuration},
                    { name: 'Additional Text', value: spellText}
                )
                message.channel.send(spellEmbed)

        }
    }
}