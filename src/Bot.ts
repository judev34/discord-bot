import { Client } from "discord.js";
import ready from "./listeners/ready";


const token = "OTUxMzk5MzczMTY4ODYxMjI1.Yim5tg.aDxB77zzMbqEiguAD2lvU6-5FZY"

console.log("Bot is Starting");

const client = new Client({
    intents: []
});

ready(client);

client.login(token);

console.log(client);

