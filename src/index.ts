 import { Client, GatewayIntentBits, ActivityType } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once("ready", () => {
    console.log(`✅ Logged in as ${client.user?.tag}!`);

    // Set bot status and activity
    client.user?.setPresence({
        status: "online", // "idle", "dnd" (Do Not Disturb), or "invisible"
        activities: [
            {
                name: "over LugerSMP! 🌴", // Custom message
                type: ActivityType.Watching, // Options: Playing, Streaming, Listening, Watching, Competing
            },
        ],
    });

    console.log("✅ Bot status set!");
});

client.on("messageCreate", async (message) => {
    if (message.content === ".ping") {
        const sent = await message.reply("Pinging...");
        const latency = sent.createdTimestamp - message.createdTimestamp;
        sent.edit(`Pong! 🏓 Latency: ${latency}ms`);
    }
});


client.login(process.env.TOKEN);

