const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist de estudos"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/2Akz4VrOe0l9d6h8i0mJhs?si=187046a4ff7549c7")
    }
}