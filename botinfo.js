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
    .setName("botinfo")
    .setDescription("Bot-info code for your bot"),

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
        .setURL("https://bit.ly/3gK81e4")
    );
    const command = new EmbedBuilder()
      .setTitle("Bot Info Code")
      .setDescription(
        `**Link:**\`\`\`https://bit.ly/3gK81e4\`\`\`\n**About Me**\n[Invite](${client.config.env.invite}) • [Support](${client.config.env.supportServer})`
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
