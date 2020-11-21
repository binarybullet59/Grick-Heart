module.exports = {
    name: 'rolld12',
    description: "rolls d12",
    execute(message, args){
        let roll = Math.floor(Math.random() * Math.floor(11)) + 1;
        message.reply(`You rolled a ` + roll + `!`);
    }
}
