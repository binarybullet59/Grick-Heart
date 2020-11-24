module.exports = {
    name: 'help',
    description: "help command",
    execute(message, args){
        message.reply('Use !tableadd <player> to add someone to the game table. Use !tableremove to remove someone from the game table. Use !roll d<4,8,10,12,20,100> to roll the dice. Use !spell <spellname(one word)> to get spell info')
    }
}
