const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.reply({
        content: `*This Command is Outdated.*`,
        ephemeral: true,
      });

    if (command.developer && interaction.user.id !== "928640467619434526") {
      return interaction.reply({
        content: `*Only the Developer can use this command*`,
        ephemeral: true,
      });
    }

    if (command.botPerms && command.botPerms.length !== 0)
      if (!interaction.guild.members.me.permissions.has(command.botPerms)) {
        return interaction.reply({
          content: `I need \`${command.BotPerms.join(
            ", "
          )}\` permission(s) to execute this command!`,
          ephemeral: true,
        });
      }

    command.execute(interaction, client);
  },
};
