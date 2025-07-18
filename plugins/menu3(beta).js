const config = require('../config');
const { cmd, commands } = require('../command');
const pkg = require("@whiskeysockets/baileys");
const { proto, generateWAMessageFromContent } = pkg;

cmd({
    pattern: "menu3",
    desc: "Displays main menu with interactive buttons",
    category: "utility",
    filename: __filename
},
async(conn, mek, m, { from }) => {
    try {
        // Generate the interactive message
        const msg = generateWAMessageFromContent(from, {
            viewOnceMessage: {
                message: {
                    
                    interactiveMessage: {
                        body: {
                            text: "SRIBOT 🇱🇰"
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "MAIN MENU",
                                        id: ".menu"
                                    })
                                },
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "MAIN MENU 2",
                                        id: ".menu2"
                                    })
                                },
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "MAIN MENU 3",
                                        id: ".menu3"
                                    })
                                },
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "OWNER MENU",
                                        id: ".ownermenu"
                                    })
                                },
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "CONVERT MENU",
                                        id: ".convertmenu"
                                    })
                                },
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "GROUP MENU",
                                        id: ".groupmenu"
                                    })
                                },
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "STICKER MENU",
                                        id: ".stickermenu"
                                    })
                                },
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "GAME MENU",
                                        id: ".gamemenu"
                                    })
                                },
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "MATHTOOL MENU",
                                        id: ".mathtoolmenu"
                                    })
                                }
                            ]
                        }
                    }
                }
            }
        }, {});

        // Send the message
        await conn.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });

    } catch (error) {
        console.error('Menu3 error:', error);
        await conn.sendMessage(from, { text: "Failed to display menu. Please try again." }, { quoted: mek });
    }
});
