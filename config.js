//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349164718113";
global.owner = process.env.OWNER_NUMBER || "2349030851807";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0oxUlpiN01sUzN6OXZqNXJOMndlQ0Y1d0pEREFDZlVJMEN2bHlPTlozbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3VaSWZsSzA0RFBpT1M3SU9IcDN0R3ZwWGZkNW9ia1ZNaUtvS3dyS1l5cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSjBaVDVUcUMyNWZDRUtpenNFL0tuSU5yL3NIdWRMaEozV2Mxb1pyNTBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyWHJCMTQxVDZTWlJFdnBqMmpMVVRwb3lvZGtVekRFSFV3clFBUFFuaTFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFIeDV0c05SdmpDVUpoMzBmNktHRDRpcndIVU1ENjVVTURzVFhUazA5Mk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd2K3U3RzNyUWJtendmVnc3VjVPRExmYlp6UmMrd2FGblVVZHZZM0FSeEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0dYRitESFdING11bEVPN2IxWmhEOS9IWktJcU1nejZYTEo3NktmNkxWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRG82WEpJZnNNSm8ydFRpM3R2VndIb1B0aVordGZYWTdoNTJsUnIxcVpndz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InF5Vk1PZk9YRU8zeDNFV3VyQmFWdVRvODJwNmgzaTNNeGtLU0M5K25xYjV0dFZRS0RTd0pzVjVxOWtVeFVxcUVZaFhYRWM2R3RYR0pJVnRiQStlRmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzYsImFkdlNlY3JldEtleSI6Img5cWo3THdOb0djNW95amJhUmVmSFBHVHQrb0JiZHpPS3dINldkem91bFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJUajdmOEhuUzNlLXE2bGRRMFNUV2ciLCJwaG9uZUlkIjoiNWMxMTc3OTItMWM3Ny00YWMzLWI3YzYtMDcwZGU4MjAxYzc3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijh4Q3MrMVdPbjRWVXVCUmppTk9vQjMvWnBjST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4KytSc2ZmUFh5S0ltWitOb1ovSFJBekhvcGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSENTMVhNWFEiLCJtZSI6eyJpZCI6IjIzNDkwMzA4NTE4MDc6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJKRVNVIE5JIFRFTUkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0puSi9iZ0ZFT0xZb3JvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFxa3NJL2FjRm5MdmRSV3FNZXFEaUtRSGtENEhIUVVOdERHWkRqZ28yaFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9nUmtXMGk2SjZNRmt2cENwZ1ZOUkZXeVMxWmNnSmdiT1Y1YURKRjNBK0JWb2NweUZZRGhaNEYvempqOVBDYk1VeUtWSlRFNGVNbEdrQWc0SHNxamp3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUU0U5SWYxMmdNbHN0bkVKNmsrczRvRkRHdHIzdnZHeXB3emtITDhMNDZkZ3RkTDVGRTFvNENTZFRzNVYwZmRxTWF5ZndzZXQ1QXpQQ0dNKzVsdk9pdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMzA4NTE4MDc6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhcXBMQ1AybkJaeTczVVZxakhxZzRpa0I1QStCeDBGRGJReG1RNDRLTm9WIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzI4MTU5ODIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS3BVIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
