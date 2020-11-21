module.exports = {
    name: 'rolld20',
    description: "rolls d20",
    execute(message, args){
        let roll = Math.floor(Math.random() * Math.floor(19)) + 1;
        message.reply(`You rolled a ` + roll + `!`);
    }
}
