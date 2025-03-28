require("dotenv").config();

const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
  console.log("someone starts game");
  ctx.telegram.sendGame("gear_starship");
});

bot.on("callback_query", async (ctx) => {
  console.log("user started the game", ctx.from.username);
  // Explicit usage
  await ctx.telegram.answerCbQuery(ctx.callbackQuery.id, undefined, {
    url: "https://vraja-nayaka.github.io/starship-game/",
  });

  // Using context shortcut
  await ctx.answerCbQuery();
});

bot.launch();
console.log("bot started!");
