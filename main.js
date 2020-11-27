const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Grick Heart is online!');
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Waterdeep: Dungeon of the Mad Mage', { type: 'PLAYING' }, { link: 'https://dnd.wizards.com/products/tabletop-games/rpg-products/waterdeep-dungeon-mad-mage'})
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'tableadd'){
        client.commands.get('tableadd').execute(message, args);
    } if(command === 'tableremove'){
        client.commands.get('tableremove').execute(message, args);
    } if(command === 'roll'){
        client.commands.get('roll').execute(message, args);
    } if(command === 'spell'){
        client.commands.get('spell').execute(message, args);
    } if(command === 'init'){
        client.commands.get('init').execute(message, args);
    }else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }
});
 
client.login('NzgwODExNjQ2OTgxMTExODQ4.X70hgw.j9hcX58ZFvZbRTe6xZq5sbLZy9g');
 
 