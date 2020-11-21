module.exports = {
    name: 'tableadd',
    description: "this starts the DND game",
    execute(message, args){
        if (message.member.hasPermission(['MANAGE_CHANNELS'])) {
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
                    message.reply('I was unable to add the member');
                    // Log the error
                    console.error(err);
                });
            } else {
                // The mentioned user isn't in this guild
                message.reply("That user isn't in this guild!");
            }
            // Otherwise, if no user was mentioned
            } else {
            message.reply("You didn't mention the user to add!");
            }
        } else {
            message.reply("You don't have permission to do this")
        }
    }
}