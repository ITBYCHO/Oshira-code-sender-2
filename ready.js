const { loadCommands } = require("../../Handlers/Commands");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    let guilds = client.guilds.cache.size;
    let members = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0);
    let channels = client.channels.cache.size;

    const activities = [`/help`, `${guilds} servers`, `${members} users`];

    setInterval(() => {
      client.user.setPresence({
        activities: [
          {
            name: `${
              activities[Math.floor(Math.random() * activities.length)]
            }`,
            type: 3,
          },
        ],
        status: client.config.env.status,
      });
    }, 15000);

    loadCommands(client);

    setTimeout(() => {
      console.log(`---------------------------------------------`);
      console.log(
        `[ INFO - BOT ] - ${client.user.username.toUpperCase()} IS NOW ONLINE `
      );
      console.log(`---------------------------------------------`);
    }, 3000);
  },
};
