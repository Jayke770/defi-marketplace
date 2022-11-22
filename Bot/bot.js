"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const runner_1 = require("@grammyjs/runner");
const transformer_throttler_1 = require("@grammyjs/transformer-throttler");
require("dotenv/config");
const token = process.env.BOT_TOKEN;
//@ts-ignore
const bot = new grammy_1.Bot(token);
const throttler = (0, transformer_throttler_1.apiThrottler)();
bot.api.config.use(throttler);
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.on("message", (ctx) => ctx.reply("Got another message!"));
(0, runner_1.run)(bot);
console.log("Bot Started");
