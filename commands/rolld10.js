module.exports = {
    name: 'rolld10',
    description: "rolls d10",
    execute(message, args){
        let roll = Math.floor(Math.random() * Math.floor(9)) + 1;
        message.reply(`You rolled a ` + roll + `!`);
    }
}
