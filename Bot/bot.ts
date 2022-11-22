import { Bot } from "grammy"
import { run } from "@grammyjs/runner";
import { apiThrottler } from "@grammyjs/transformer-throttler";
import 'dotenv/config'
const TOKENS = ['$TEAM', '$ALGO', '$KLAY', '$SAND', '$APE']
const payment_token = '284685063:TEST:ZjE5ZTJjYjFiZDQz'
const bot_token = process.env.BOT_TOKEN
//@ts-ignore
const bot = new Bot(bot_token)
const throttler = apiThrottler()
bot.api.config.use(throttler)
bot.command("start", async (ctx) => {
    const botinfo = await bot.api.getMe()
    let text = `Hi @${ctx.from?.username}, Welcome to ${botinfo.first_name}\n\n`
    text += "Available Tokens\n"
    TOKENS.map((token, i) => {
        text += `${i + 1}. ${token}\n`
    })
    await ctx.reply(text, {
        reply_markup: {
            inline_keyboard: [[
                //@ts-ignore
                { text: 'Check Marketplace', web_app: { url: process.env.HOST } }
            ]]
        }
    })
})
bot.command('f', async (ctx) => {
    await ctx.replyWithInvoice(
        'test',
        'test',
        JSON.stringify({
            coupon: "BLACK FRIDAY",
        }),
        payment_token,
        'usd',
        [
            { label: "Working Time Machine", amount: 4200 },
            { label: "Gift wrapping", amount: 1000 },
        ],

    )
})
bot.on("message", (ctx) => ctx.reply("Got another message!"))
run(bot)
console.log("Bot Started")