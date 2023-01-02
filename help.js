const {
  ChatInputCommandInteraction,
  Client,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");
const buttonPage = require("../../Handlers/Pagination");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Get info about all the commands"),

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    let date = new Date();
    let timestamp = date.getTime() - Math.floor(client.uptime);

    const overviewPage = new EmbedBuilder()
      .setColor(client.config.color.main)
      .setAuthor({
        name: `${client.user.username} | Help Panel | Overview Page`,
        iconURL: client.user.displayAvatarURL(),
      })
      .addFields({
        name: `Bot Features:`,
        value: `>>> ***${client.user}** ${client.config.env.description}*`,
        inline: true,
      })
      .addFields({
        name: "Bot Stats:",
        value: `>>> ${client.config.emoji.guild} **Guilds:** \` ${client.guilds.cache.size} \`\n${client.config.emoji.stats} **Bot Ping:** \`${client.ws.ping}ms\`\n${client.config.emoji.slash} **slashC:** \` ${client.commands.size} \``,
        inline: true,
      })
      .addFields({
        name: `Developer:`,
        value: `> *This amazing bot was coded by, [benzmeister](https://dev-benzmeister.tk), with many features available and more coming soon!*`,
        inline: true,
      })
      .setFooter({
        text: `Use the menu to view all my commands!`,
      });

    const infoPage = new EmbedBuilder()
      .setAuthor({ name: `${client.user.username} | Help Panel | Info Page` })
      .addFields(
        {
          name: `\`/help\``,
          value: `*Get info about all the commands*`,
          inline: true,
        },
        {
          name: `\`/invite\``,
          value: `*Invite the bot to your server*`,
          inline: true,
        },
        {
          name: `\`/ping\``,
          value: `*Get the response time of the bot*`,
          inline: true,
        },
        {
          name: `\`/uptime\``,
          value: `*Get the uptime of the bot*`,
          inline: true,
        }
      )
      .setColor(client.config.color.main)
      .setFooter({
        text: `Page 1 • 3`,
        iconURL: client.user.displayAvatarURL(),
      });

    const commandPage = new EmbedBuilder()
      .setAuthor({
        name: `${client.user.username} | Help Panel | Command Page`,
      })
      .addFields(
        {
          name: `\`/247\``,
          value: `*Configure the bot*`,
          inline: true,
        },
        {
          name: `\`/anti-bot\``,
          value: `*24/7 Repl Code*`,
          inline: true,
        },
        {
          name: `\`/anticrash-command\``,
          value: `*Anti bot Code*`,
          inline: true,
        },
        {
          name: `\`/bot-mention\``,
          value: `*Anti-Crash Command Code*`,
          inline: true,
        },
        {
          name: `\`/botinfo\``,
          value: `*Bot-info code for your bot*`,
          inline: true,
        },
        {
          name: `\`/clear-command\``,
          value: `*Clear Command Code*`,
          inline: true,
        }
      )
      .setColor(client.config.color.main)
      .setFooter({
        text: `Page 2 • 3`,
        iconURL: client.user.displayAvatarURL(),
      });

    const commandPage2 = new EmbedBuilder()
      .setColor(client.config.color.main)
      .setAuthor({
        name: `${client.user.username} | Help Panel | Command Page 2`,
      })
      .addFields(
        {
          name: "`/help-embed`",
          value: "*Help code for your bot*",
          inline: true,
        },
        {
          name: `\`/ping-embed\``,
          value: `*Easy ping command*`,
          inline: true,
        },
        {
          name: `\`/profile-command\``,
          value: `*Profile Command Code*`,
          inline: true,
        },
        {
          name: `\`/purge-command\``,
          value: `*Purge Command Code*`,
          inline: true,
        },
        {
          name: `\`/rotating-status\``,
          value: `*Rotating bot status*`,
          inline: true,
        },
        {
          name: `\`/uptime-command\``,
          value: `*Uptime Command Code*`,
          inline: true,
        }
      )
      .setFooter({
        text: `Page 3 • 3`,
        iconURL: client.user.displayAvatarURL(),
      });

    let pages = [overviewPage, infoPage, commandPage, commandPage2];

    buttonPage(interaction, pages);
  },
};
