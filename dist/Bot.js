"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("dotenv").config();
const discord_js_1 = require("discord.js");
const interactionCreate_1 = tslib_1.__importDefault(require("./listeners/interactionCreate"));
const ready_1 = tslib_1.__importDefault(require("./listeners/ready"));
console.log("Bot is Starting");
const client = new discord_js_1.Client({
    intents: []
});
(0, ready_1.default)(client);
(0, interactionCreate_1.default)(client);
client.login(process.env.TOKEN);
console.log(client);
