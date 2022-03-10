import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const RandomNumber: Command = {
    name: "number",
    description: "Returns a random number",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => { 
        await interaction.followUp({
            content: `${random(0, 100)}`,
        });
    }
}   

function random(arg0: number, arg1: number) {
    return Math.floor(Math.random() * (arg1 - arg0 + 1)) + arg0;

}
