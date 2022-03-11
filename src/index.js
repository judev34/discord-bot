// Require the necessary discord.js classes
const path = require('path');
const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('../config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const eventFiles = fs.readdirSync(path.join(__dirname, 'events')).filter(file => file.endsWith('.js'));

for (const eventFile of eventFiles) {
	const event = require(`./events/${eventFile}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(client, ...args));
	} else {
		client.on(event.name, (...args) => event.execute(client, ...args));
	}
}
// Login to Discord with your client's token
client.login(token);
