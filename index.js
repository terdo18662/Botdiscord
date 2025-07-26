const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

// لما البوت يشتغل
client.once('ready', () => {
    console.log(`✅ البوت اشتغل باسم: ${client.user.tag}`);
});

// أمر بسيط !ping
client.on('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.reply('Pong!');
    }
});

// تسجيل الدخول باستخدام التوكن (من الإعدادات)
client.login(process.env.TOKEN);
