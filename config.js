const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349124503464";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_02_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzksXG4gICAgICAgIDk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDMyLFxuICAgICAgICA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDcyLFxuICAgICAgICA5LFxuICAgICAgICA2MixcbiAgICAgICAgMTE4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDUzLFxuICAgICAgICA1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNSxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk4LFxuICAgICAgICAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDcxLFxuICAgICAgICAzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MCxcbiAgICAgICAgMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDkwLFxuICAgICAgICA3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVURsMDNkV001S3lpdWNzWFgxWlJuQkY3clYyeU0zVXplcFByZCthVktGTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic2dYQzl1bVRSekNmMXpBaDhpNk5aZ1wiLFxuICBcInBob25lSWRcIjogXCIwNzhjZGE3YS1lNTI0LTRlZTMtYmUwNy03MDhjZDNlZDAyOGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgMjAsXG4gICAgICAxMTIsXG4gICAgICAxNDMsXG4gICAgICAzNCxcbiAgICAgIDk4LFxuICAgICAgMjQ1LFxuICAgICAgMjM4LFxuICAgICAgNDUsXG4gICAgICAxODQsXG4gICAgICAxOCxcbiAgICAgIDc2LFxuICAgICAgMjQ3LFxuICAgICAgMTQ1LFxuICAgICAgMTk4LFxuICAgICAgODYsXG4gICAgICAyMTYsXG4gICAgICA4LFxuICAgICAgMTYsXG4gICAgICA0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAyMzIsXG4gICAgICAyNDQsXG4gICAgICAyNCxcbiAgICAgIDc2LFxuICAgICAgMjEsXG4gICAgICA2OSxcbiAgICAgIDc5LFxuICAgICAgMTA1LFxuICAgICAgMTk4LFxuICAgICAgMTg2LFxuICAgICAgMTcxLFxuICAgICAgMjE5LFxuICAgICAgMjQ4LFxuICAgICAgMTkyLFxuICAgICAgNjYsXG4gICAgICAxNDMsXG4gICAgICAyMTcsXG4gICAgICAxLFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzhINUU3R0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjQ1MDM0NjQ6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NzYxMDA0MzAxNTI0ODo0OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPaU52c0FCRUlIR2xyc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdaNFdCTVk2VjF2a3hjWXRKMnh0VC8vRGY4RUhCbE02OUFYYi9lTEdYZ2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS0FONEJ0L0JDaTdhSzViWmlTb1JGekZGV0VwQU1JRUcxY1Fmb1JTWEgyZjByYTduZW50QnpvY0JOTEx6SjlTSWVON1R2KzhISTVTZHM1RkJMdnE0QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV0M1K2V5L0wvR1U5Vm9rU2pXT0lncXJEckU5dGhsaVJSVElyYjRVSVAvSGkwSUNVTzhsUnA1YkFNQkRsckUwUVA2cHRTeXpWVjAyMWNsR3NqTnlpQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyNDUwMzQ2NDo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ3MTQxMTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFL2ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUvZi5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
