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
    .setName("anticrash-command")
    .setDescription("Anti-Crash Command Code"),

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
        .setURL("https://bit.ly/3iuPkLC")
    );
    const command = new EmbedBuilder()
      .setTitle("Anti-Crash Command Code")
      .setDescription(
        `**Link:**\`\`\`https://bit.ly/3iuPkLC\`\`\`\n**About Me**\n[Invite](${client.config.env.invite}) • [Support](${client.config.env.supportServer})`
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
