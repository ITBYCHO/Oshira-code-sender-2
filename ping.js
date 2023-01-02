const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  Client,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Shows the bot ping"),

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    // Latency Check
    let webLatency = new Date() - interaction.createdAt;
    let apiLatency = client.ws.ping;

    // Emoji
    let emLatency = {
      Green: "🟢 FAST",
      Yellow: "🟡 SLOW",
      Red: "🔴 SLOW AF",
    };

    const embed = new EmbedBuilder()
      .setAuthor({
        name: `Returns Latency and API Ping!`,
        iconURL: client.user.displayAvatarURL(),
      })
      .setColor(client.config.color.main)
      .addFields({
        name: `Websocket Latency:`,
        value: `\`${
          webLatency <= 200
            ? emLatency.Green
            : webLatency <= 400
            ? emLatency.Yellow
            : emLatency.Red
        } - ${webLatency}ms\``,
      })
      .addFields({
        name: `API Latency:`,
        value: `\`${
          apiLatency <= 200
            ? emLatency.Green
            : apiLatency <= 400
            ? emLatency.Yellow
            : emLatency.Red
        } - ${apiLatency}ms\``,
      })
      .setFooter({ text: `⚡ Powered by Supreme Development` });

    interaction.reply({ embeds: [embed] });
  },
};
