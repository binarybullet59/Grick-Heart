Logger = require('../modules/logger');
logger = new Logger('main');

module.exports = {
    name: 'table',
    description: "this controls access to the table",
    execute(message, args){
        if (message.member.roles.cache.find(r => r.name === "DM")) {
            if (args[0] === "add") {
                let gAccess = message.guild.roles.cache.find(role => role.name === "Game Access");
                const user = message.mentions.users.first();
                // If we have a user mentioned
                if (user) {
                // Now we get the member from the user
                const member = message.guild.member(user);
                // If the member is in the guild
                if (member) {
                    member
                    .roles.add(gAccess)
                    .then(() => {
                        // We let the message author know we were able to add the person
                        message.reply(`Successfully added ${user.tag} to the table`);
                    })
                    .catch(err => {
                        // An error happened
                        // This is generally due to the bot not being able to add the member,
                        // either due to missing permissions or role hierarchy
                        message.reply('I was unable to add the member due to an error');
                        // Log the error
                        logger.error(err);
                    });
                } else {
                    // The mentioned user isn't in this guild
                    message.reply("That user isn't in this guild!");
                }
                // Otherwise, if no user was mentioned
                } else {
                message.reply("You didn't mention the user to add!");
                logger.error('No arguements provided in !table command');
                }
            } if (args[0] === "remove") {
                let gAccess = message.guild.roles.cache.find(role => role.name === "Game Access");
                const user = message.mentions.users.first();
                // If we have a user mentioned
                if (user) {
                // Now we get the member from the user
                const member = message.guild.member(user);
                // If the member is in the guild
                if (member) {
                    member
                    .roles.remove(gAccess)
                    .then(() => {
                        // We let the message author know we were able to add the person
                        message.reply(`Successfully removed ${user.tag} from the table`);
                    })
                    .catch(err => {
                        // An error happened
                        // This is generally due to the bot not being able to add the member,
                        // either due to missing permissions or role hierarchy
                        message.reply('I was unable to remove the member due to an error');
                        // Log the error
                        logger.error(err);
                    });
                } else {
                    // The mentioned user isn't in this guild
                    message.reply("That user isn't in this guild!");
                }
                // Otherwise, if no user was mentioned
                } else {
                message.reply("You didn't mention the user to remove!");
                logger.error('No arguements provided in !table command');
                }
            }
            
        } else {
            message.reply("You don't have permission to do this")
        }
    }
}