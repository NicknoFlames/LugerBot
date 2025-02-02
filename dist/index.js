"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new discord_js_1.Client({
    intents: [discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMessages, discord_js_1.GatewayIntentBits.MessageContent],
});
client.once("ready", () => {
    var _a, _b;
    console.log(`✅ Logged in as ${(_a = client.user) === null || _a === void 0 ? void 0 : _a.tag}!`);
    // Set bot status and activity
    (_b = client.user) === null || _b === void 0 ? void 0 : _b.setPresence({
        status: "online", // "idle", "dnd" (Do Not Disturb), or "invisible"
        activities: [
            {
                name: "over LugerSMP! 🌴", // Custom message
                type: discord_js_1.ActivityType.Watching, // Options: Playing, Streaming, Listening, Watching, Competing
            },
        ],
    });
    console.log("✅ Bot status set!");
});
client.on("messageCreate", (message) => __awaiter(void 0, void 0, void 0, function* () {
    if (message.content === ".ping") {
        const sent = yield message.reply("Pinging...");
        const latency = sent.createdTimestamp - message.createdTimestamp;
        sent.edit(`Pong! 🏓 Latency: ${latency}ms`);
    }
}));
client.login(process.env.TOKEN);
