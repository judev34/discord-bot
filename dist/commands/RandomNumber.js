"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumber = void 0;
exports.RandomNumber = {
    name: "number",
    description: "Returns a random number",
    type: "CHAT_INPUT",
    run: async (client, interaction) => {
        await interaction.followUp({
            content: `${random(0, 100)}`,
            ephemeral: true,
        });
    }
};
function random(arg0, arg1) {
    return Math.floor(Math.random() * (arg1 - arg0 + 1)) + arg0;
}
