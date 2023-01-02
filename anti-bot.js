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
    .setName("antibot-command")
    .setDescription("Anti bot Code"),

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
        .setURL("https://bit.ly/3OOnG8J"),

      new ButtonBuilder()
        .setStyle(ButtonStyle.Link)
        .setLabel("Redirect Link")
        .setURL("https://bit.ly/3H10DW9")
    );
    const command = new EmbedBuilder()
      .setTitle("Anti Bot Code")
      .setDescription(
        `**Link (Event):**\`\`\`https://bit.ly/3OOnG8J\`\`\`\n**Link (Model):** \`\`\`https://bit.ly/3H10DW9\`\`\`\n**About Me**\n[Invite](${client.config.env.invite}) • [Support](${client.config.env.supportServer})`
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
