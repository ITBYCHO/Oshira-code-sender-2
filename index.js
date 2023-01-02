const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages, GuildPresences } =
  GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages, GuildPresences],
  partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./Handlers/Events");

client.config = require("./config.json");
global.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();

const { connect } = require("mongoose");
connect(client.config.mongoDB.mongoURI, {}).then(() =>
  console.log("[ MONGO ] - Connected to Mongo Database")
);

loadEvents(client);

client.login(client.config.env.token);

process.on("unhandledRejection", (reason, p) => {
  console.log(" [ ANTI-CRASH ] :: Unhandled Rejection/Catch");
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log(" [ ANTI-CRASH ] :: Uncaught Exception/Catch");
  console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(" [ ANTI-CRASH ] :: Uncaught Exception/Catch (MONITOR)");
  console.log(err, origin);
});
process.on("multipleResolves", () => {
  //console.log(' [ ANTI-CRASH ] :: Multiple Resolves');
  //console.log(type, promise, reason);
});
