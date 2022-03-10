import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const RandomNumber: Command = {
    name: "sentence",
    description: "Returns a random sentence",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => { 
        await interaction.followUp({
            content: `${randomSentence()}`,
            ephemeral: true,
        });
    }
}   

const sentences = [
    "I'm a random sentence",
    "I'm another random sentence",
    "I'm a third random sentence",
    "I'm a fourth random sentence",
    "I'm a fifth random sentence",
    "I'm a sixth random sentence",
]

function randomSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
}