module.exports = {
    name: 'rolld4',
    description: "rolls d4",
    execute(message, args){
        let roll = Math.floor(Math.random() * Math.floor(3)) + 1;
        message.reply(`You rolled a ` + roll + `!`);
    }
}
