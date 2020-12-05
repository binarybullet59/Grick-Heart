Logger = require('../modules/logger');
logger = new Logger('main');

module.exports = {
    name: 'roll',
    description: "this command rolls dice!",
    execute(message, args){
        if (!args.length) {
            message.reply(`You didn't provide any arguments!`);
            logger.error('No arguements provided in roll command');
        } if (args[0] === 'd4') {
            let roll = Math.floor(Math.random() * Math.floor(3)) + 1;
            message.reply(`You rolled a ` + roll + `!`);
        } if (args[0] === 'd8') {
            let roll = Math.floor(Math.random() * Math.floor(7)) + 1;
            message.reply(`You rolled a ` + roll + `!`);
        } if (args[0] === 'd6') {
            let roll = Math.floor(Math.random() * Math.floor(5)) + 1;
            message.reply(`You rolled a ` + roll + `!`);
        } if (args[0] === 'd10') {
            let roll = Math.floor(Math.random() * Math.floor(9)) + 1;
            message.reply(`You rolled a ` + roll + `!`);
        } if (args[0] === 'd12') {
            let roll = Math.floor(Math.random() * Math.floor(11)) + 1;
            message.reply(`You rolled a ` + roll + `!`);
        } if (args[0] === 'd20') {
            let roll = Math.floor(Math.random() * Math.floor(19)) + 1;
            message.reply(`You rolled a ` + roll + `!`);
        } else if (args[0] === 'd100') {
            let roll = Math.floor(Math.random() * Math.floor(99)) + 1;
            message.reply(`You rolled a ` + roll + `!`);
        }
    }
}