module.exports = {
    name: 'rolld100',
    description: "rolls d100",
    execute(message, args){
        let roll = Math.floor(Math.random() * Math.floor(99)) + 1;
        message.reply(`You rolled a ` + roll + `!`);
    }
}
