module.exports = {
    name: 'rolld8',
    description: "rolls d8",
    execute(message, args){
        let roll = Math.floor(Math.random() * Math.floor(7)) + 1;
        message.reply(`You rolled a ` + roll + `!`);
    }
}
