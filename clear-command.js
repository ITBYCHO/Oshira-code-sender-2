const {
  ChatInputCommandInteraction,
  Client,
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear-command")
    .setDescription("Clear Command Code"),

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const embedButton = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setStyle(ButtonStyle.Link)
        .setLabel("Redirect Link")
        .setURL("https://bit.ly/3Fk1MqQ")
    );
    const command = new EmbedBuilder()
      .setTitle("Clear Command Code")
      .setDescription(
        `**Link:**\`\`\`https://bit.ly/3Fk1MqQ\`\`\`\n**About Me**\n[Invite](${client.config.env.invite}) • [Support](${client.config.env.supportServer})`
      )
      .setFooter({
        text: `${client.user.username}`,
        iconURL: client.user.displayAvatarURL(),
      })
      .setColor(client.config.color.main);

    interaction.reply({
      embeds: [command],
      components: [embedButton],
      ephemeral: true,
    });
  },
};
