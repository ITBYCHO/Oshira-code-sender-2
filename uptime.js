const {
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
  SlashCommandBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("uptime")
    .setDescription("Fetchs the bots total uptime"),

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    let date = new Date();
    let timestamp = date.getTime() - Math.floor(client.uptime);

    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setAuthor({
            name: `Uptime of: ${client.user.tag}`,
            iconURL: client.user.displayAvatarURL(),
          })
          .setColor(client.config.color.main)
          .addFields({
            name: `__Up Since:__`,
            value: `_<t:${Math.floor(timestamp / 1000)}:R>_`,
          })
          .addFields({
            name: `__Launched at:__`,
            value: `_<t:${Math.floor(timestamp / 1000)}:F>_`,
          })
          .setFooter({
            text: `Uptime System\n↳ Powered by Supreme Development`,
            iconURL: client.user.displayAvatarURL(),
          }),
      ],
    });
  },
};
