const {
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  SlashCommandBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Invite the bot to your server"),

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const inviteembed = new EmbedBuilder()
      .setColor(client.config.color.main)
      .setDescription(
        `*Thanks for choosing **${client.user}** as your ${client.config.env.about} bot, you can invite me clicking the invite button bellow.*`
      )
      .setFooter({ text: `Invite ${client.user.username}` });

    const invitebutton = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Invite Me")
        .setURL(
          `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`
        )
        .setStyle(ButtonStyle.Link)
    );

    interaction.reply({ embeds: [inviteembed], components: [invitebutton] });
  },
};
