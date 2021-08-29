// Arifi Razzaq Base Buatan Aku Sendiri
// Jangan Di Bully Om, Masih Pemula
// Dan Masih Banyak Copy Paste Juga Pastinya.

// Noted : Aku Gak Claim, / Ngaku Ngaku Itu Milik Gw
//.         Gw Cuma Pengen Rapi Nih Base, Untuk TqTo
//.         Dan Asal Usul Case? Bisa Chat Aku Di WhatsApp
//.         Biar Aku Buat Case Khusus. Dan Nama Penemunya.

     
        /*\ === Masih Banyak Kekurangan, 
                     Tolong Bantu
                Sempurnain Nih Base🗒️ === \*/

"use strict"; // Keamanan Ketat Tanpa Variabel
const {
 WAConnection: _WAConnection,
 MessageType,
 Presence,
 MessageOptions,
 Mimetype,
 MimetypeMap,
 WALocationMessage,
 ChatModification,
 WA_MESSAGE_STUB_TYPES,
 WA_DEFAULT_EPHEMERAL,
 ReconnectMode,
 ProxyAgent,
 GroupSettingChange,
 waChatKey,
 mentionedJid,
 processTime
} = require("@adiwajshing/baileys"); // Direct Web WhatsApp ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let {
 default: Axios
} = require("axios"); // Default Direct GET link ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let {
 error,
 qrcode
} = require("qrcode-terminal"); // Create In Code QR for Connecting ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let { 
 spawn, 
 exec, 
 execSync 
} = require("child_process"); // Direct System Terminal ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let {
 removeBackgroundFromImageFile 
} = require('remove.bg'); // Module To Image Nobg ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let { 
 EmojiAPI 
} = require("emoji-api"); // Module Emoji To Sticker ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let emoji = new EmojiAPI(); // New in The Module New EmojiAPI ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))

let fs = require("fs-extra"); // Read File ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let moment = require("moment-timezone"); // Read Zone TIME ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let speed = require("performance-now"); // Read Speed ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let request = require("request"); // Add From Require In Request ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let ffmpeg = require("fluent-ffmpeg"); // Read Image ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let tik = require("tiktok-scraper-without-watermark"); // Module In Tiktok WM ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let ig = require("insta-fetcher"); // Module In Instagram ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let hx = require("hxz-api"); // Rest API HXZ ;By Lord_ ((+ Arifi Razzaq OFFICIAL +)) 
let fetch = require("node-fetch"); // Read Base From Node ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let Fb = require("fb-video-downloader"); // Module In Facebook ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let twitterGetUrl = require("twitter-url-direct"); //Module In Twitter ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let phoneNum = require("awesome-phonenumber"); // Read Phone Number ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let gis = require("g-i-s"); // Module In Google Image ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let got = require("got"); // Module In Got ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let imageToBase64 = require("image-to-base64"); // Read Image Code Base64 ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let ID3Writer = require("browser-id3-writer"); // Read From Browser Write ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let brainly = require("brainly-scraper"); // Module In Brainly ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let yts = require("yt-search"); // Module In Youtube Search ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let ms = require("parse-ms"); // Read From MS / Detik ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let toMs = require("ms"); // [Object] ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let util = require("util"); // [Object] ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let toHur = require("@develoka/angka-terbilang-js"); // Object ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))

let {
 jadibot,
 stopjadibot 
} = require("../Library/jadibot"); // Jadi Bot ;By Lord_ ((+ Arifi Razzaq OFFICIAL + MyMans +))
let {
 wait,
 getBuffer,
 h2k,
 generateMessageID,
 getGroupAdmins,
 getRandom, 
 start, 
 info, 
 success, 
 close, 
 isUrl, 
 math
} = require("../Library/access"); // [Object] ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let { 
 color, 
 bgcolor, 
 brightcolor
} = require("../Library/color"); // Collors ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let { 
 fetchJson, 
 getBase64, 
 kyun, 
 createExif 
} = require("../Library/fetcher"); // [Object] ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let { 
 yta, 
 ytv, 
 igdl, 
 upload, 
 formatDate 
} = require("../Library/ytdl"); // [Object] ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let { 
 webp2mp4File 
} = require("../Library/webp2mp4"); // [Object] ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let { 
 virtex, 
 vipi 
} = require("../Library/virtex"); // Virus ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let { 
 sleep, 
 isAfk, 
 cekafk, 
 addafk 
} = require("../Library/offline"); // Module AFK ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let {
 tiktok,
 tiktokmusic,
 ghstalk,
 mediafire,
 covid,
 tahta,
 styleText,
 asmaul,
 fb,
 igstalk,
 twitter,
 playstore,
 tebakgambar,
 kodepos,
 gempa,
 kompasnews,
 tribunnews,
 igtv,
 pinterest,
 igvideo,
 igfoto,
} = require("../Library/scrape"); // [Object] ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let { 
 lirikLagu 
} = require("../Library/lirik"); // [Object] ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let {
 wikiSearch 
} = require("../Library/wiki"); // [Object] ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let {
 herolist
} = require("../Library/herolist"); // [Object] ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let {
 herodetails
} = require("../Library/herodetail"); // [Object] ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let {
 recognize
} = require("../Library/ocr"); // [Object] ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let {
 mediafireDl
} = require("../Library/mediafire"); // [Object] ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let {
 addCommands,
 checkCommands,
 deleteCommands
} = require("../Library/autoresp"); // [Object] ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let {
 uptotele, 
 uptonaufal, 
 uploadFile
} = require("../Library/uploadimage");

// In Module ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let simple = require("../Library/simple");
let PathModuleID = require("../Library/myBase");
let ph = require("../Library/photooxy");
let mainWrite = require("../Library/textToSimple");
let SerialPlayer = require("../run");

// Set ImageSet ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let ImgSettings = JSON.parse(fs.readFileSync('./handler/setting/fakeSet.json'));
let {
    pathImgStatus, 
    pathImgToko,
    pathAdReply,
    pathMenu,
    pathThumbl
} = ImgSettings
// Set SimpleText ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let settings = JSON.parse(fs.readFileSync('./handler/setting/settings.json'));
let { 
    teksReply,
    bufferReply,
    monospace, 
    cr,
    hackers,
    footer
} = settings
// Set numberOfficial ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let ticks = JSON.parse(fs.readFileSync('./handler/setting/setVerify.json'));
let {
    whatsapp, 
    FacebookB
} = ticks

// Global Direct Message ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
global['penoom'] = JSON.parse(fs.readFileSync('./handler/setting/config.json'));
let creatorOwner = global.penoom.ownerNumber
// Switch ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))

let multi = true
let isPublic = true
let bugc = true
let isWelcome = true
let isChangeUpdateGroup = true
let isAntidelete = true 
let isAntiCall = true

//================================[ 𝔸𝕣𝕚𝕗𝕚 ℝ𝕒𝕫𝕫𝕒𝕢 𝕆𝔽𝔽𝕀ℂ𝕀𝔸𝕃 ]================================\\

/** Export Dengan Media parseInt

* @param {koneksi.base} [folder.base] 
* @param {Option} [push/shift]
* @param {string} jid
* @param {codex} base64
**/
module.exports = (SerialPlayer.arifi) = async (arifi, rojak) => {
	try {
function Arifirazzaq_ya_gue
(awesomeBased,sambungProperty){
  let Arifirazzaq_ya_gue_SetOwnProperty =proFTectonicRojak();
    return Arifirazzaq_ya_gue = function(Arifirazzaq_ya_guef0,_0x1ac329){
    Arifirazzaq_ya_guef0 = Arifirazzaq_ya_guef0-0x72;
    let Bismillah_123_konekzi = Arifirazzaq_ya_gue_SetOwnProperty[Arifirazzaq_ya_guef0];
    return Bismillah_123_konekzi;
    },
    Arifirazzaq_ya_gue(awesomeBased,sambungProperty);}
    let lockbassd = Arifirazzaq_ya_gue;
    (function(WAJIB ,SUNNAH){
    let propertynyaRojak = Arifirazzaq_ya_gue,OutputModuleBase_SetRp = WAJIB ();
    while(!![]){
    try{
    var Menyandingkan_ke_sessi =-parseInt(propertynyaRojak(0x7b))/0x1+parseInt(propertynyaRojak(0x79))/0x2+-parseInt(propertynyaRojak(0x78))/0x3*(-parseInt(propertynyaRojak(0x75))/0x4)+parseInt(propertynyaRojak(0x7c))/0x5*(-parseInt(propertynyaRojak(0x76))/0x6)+parseInt(propertynyaRojak(0x7a))/0x7*(-parseInt(propertynyaRojak(0x77))/0x8)+parseInt(propertynyaRojak(0x72))/0x9*(-parseInt(propertynyaRojak(0x74))/0xa)+parseInt(propertynyaRojak(0x73))/0xb;if(Menyandingkan_ke_sessi===SUNNAH)
    break;
    else OutputModuleBase_SetRp['push'](OutputModuleBase_SetRp['shift']());}catch(_0x582051){OutputModuleBase_SetRp['push'](OutputModuleBase_SetRp['shift']());
    }
       }
           }(proFTectonicRojak,0x2fa5a));
           function proFTectonicRojak(){
           const RemotedJidFromBasedArifiRazzaqInRojak=['1967lEmulc','129520tiMGYb','2605GonqSx','hasNewMessage','753075GpeGxB','4991525QiRkjw','10cMbuoP','3532oHSowF','2274uNXWwe','408UegaXy','273vTPIBi','172038SXfccZ'];proFTectonicRojak=function(){return RemotedJidFromBasedArifiRazzaqInRojak;
           };
           return proFTectonicRojak();
           }
           if(!rojak[lockbassd(0x7d)])return;
       rojak = rojak.messages.all()[0]
    if (!rojak.message) return
if (rojak.key && rojak.key.remoteJid == 'status@broadcast') return
if ((Object.keys(rojak.message)[0] === 'ephemeralMessage' && JSON.stringify(rojak.message).includes('EPHEMERAL_SETTING')) && rojak.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (rojak.key.fromMe) return
let nums = rojak.participant
let longkapnye = "\n".repeat(420)
let tekuss = `© Arifi Razzaq OFFICIAL 2021-2035${longkapnye}\`\`\`BUGGC TERDETEKSI\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by @arifirazzaq2001\n*Jangan maen bug Ya!*`
arifi.groupRemove(rojak.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
    arifi.sendMessage(rojak.key.remoteJid, '[ BUG TERDETEKSI ]\n Adanya Seseorang Telah Mengirimkan Bug ^Toggle Disappearing Messages^', MessageType.text)
        arifi.sendMessage(rojak.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
         if (rojak.key.fromMe) {}
       if (!isPublic) {
     if (!rojak.key.fromMe) return
    }
     global.blocked
        let m = simple.smsg(arifi, rojak)
             if (m.isBaileys === true) return
        	rojak.message = (Object.keys(rojak.message)[0] === 'ephemeralMessage') ? rojak.message.ephemeralMessage.message : rojak.message

        const content = JSON.stringify(rojak.message)
		const from = rojak.key.remoteJid
		const type = Object.keys(rojak.message)[0]

//================================[ 𝔸𝕣𝕚𝕗𝕚 ℝ𝕒𝕫𝕫𝕒𝕢 𝕆𝔽𝔽𝕀ℂ𝕀𝔸𝕃 ]================================\\
        // Performance ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
        const timestamp = speed();
        const latensi = speed() - timestamp
		
        // Waktu  ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss') 
		const timeJak = moment.tz('Asia/Jakarta').format("HH:mm:ss");
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        
        // Prefix ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
        const cmd = (type === 'conversation' && rojak.message.conversation) ? rojak.message.conversation : (type == 'imageMessage') && rojak.message.imageMessage.caption ? rojak.message.imageMessage.caption : (type == 'videoMessage') && rojak.message.videoMessage.caption ? rojak.message.videoMessage.caption : (type == 'extendedTextMessage') && rojak.message.extendedTextMessage.text ? rojak.message.extendedTextMessage.text : (type == 'listResponseMessage') && rojak.message.listResponseMessage.singleSelectReply.selectedRowId ? rojak.message.listResponseMessage.singleSelectReply.selectedRowId : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        if (multi){
        
        var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        } else {
        prefix = pref
        }

        // Detect Type Prefix ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
        var body = (type === 'conversation' && rojak.message.conversation.startsWith(prefix)) ? rojak.message.conversation : (type == 'imageMessage') && rojak.message.imageMessage.caption.startsWith(prefix) ? rojak.message.imageMessage.caption : (type == 'videoMessage') && rojak.message.videoMessage.caption.startsWith(prefix) ? rojak.message.videoMessage.caption : (type == 'extendedTextMessage') && rojak.message.extendedTextMessage.text.startsWith(prefix) ? rojak.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(rojak.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(rojak.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(rojak.message.stickerMessage.fileSha256.toString('base64')) : ""
		
		// Eval
		var budy = (type === 'conversation') ? rojak.message.conversation : (type === 'extendedTextMessage') ? rojak.message.extendedTextMessage.text : ''
        
        // Detector
        var pes = (type === 'conversation' && rojak.message.conversation) ? rojak.message.conversation : (type == 'imageMessage') && rojak.message.imageMessage.caption ? rojak.message.imageMessage.caption : (type == 'videoMessage') && rojak.message.videoMessage.caption ? rojak.message.videoMessage.caption : (type == 'extendedTextMessage') && rojak.message.extendedTextMessage.text ? rojak.message.extendedTextMessage.text : (type == 'listResponseMessage') && rojak.message.listResponseMessage.singleSelectReply.selectedRowId ? rojak.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        
        // MessageType From Doc Baileys
		const { 
		 text, 
		 extendedText, 
		 contact, 
		 location, 
		 liveLocation, 
		 image, 
		 video, 
		 sticker, 
		 document, 
		 audio, 
		 product, 
		 listMessage,
		 contactsArray, 
		 GroupInviteMessage, 
		 buttonsMessage
		} = MessageType
        if (!rojak.message) return
        	    
        // List Cmd ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
        const isList = Object.keys(rojak.message)[0] == "listMessage" ? rojak.message.listMessage.title : ''
        
        // Stik Cmd ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
        const isStc = Object.keys(rojak.message)[0] == "stickerMessage" ? rojak.message.stickerMessage.fileSha256.toString('hex'): "" 
        
        // Detect Command ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
        const command = body.toLowerCase().split(' ')[0] || ''
        const messagesDB = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const isCmd = command.startsWith(prefix)
        const q = body.slice(command.length + 1, body.length)
        const args = body.trim().split(/ +/).slice(1)
        
        // Bot ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
		const run = process.uptime();
		const botNumber = arifi.user.jid
        
        // UserBot ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
		const user = [arifi.user.jid]
		
		// GroupBot ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
		const isGroup = from.endsWith('@g.us')
        const sender = isGroup ? rojak.participant : rojak.key.remoteJid
		const senderNumber = sender.split("@")[0]
		const isOwner = creatorOwner.includes(sender)
		const conts = rojak.key.fromMe ? arifi.user.jid : arifi.contacts[sender] || { 
		notify: jid.replace(/@.+/, '') 
		}
		
        const groupMetadata = isGroup ? await arifi.groupMetadata(from) : ''
        const groupDesc = isGroup ? groupMetadata.desc : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const groupId = isGroup ? groupMetadata.jid : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupOwner = isGroup ? groupMetadata.owner : ''
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        
        // Includes
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		
		// Tagged PushnameBot ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
        const pushname = rojak.key.fromMe ? arifi.user.name : conts.notify || conts.vname || conts.name || '-'
		if (pushname === undefined ) {
        pushname = await arifi.getName(sender)
        }
				
        // PhoneBot ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
		const { 
		 wa_version, 
		 mcc, 
		 mnc, 
		 os_version, 
		 device_manufacturer, 
		 device_model 
		} = arifi.user.phone
		
        // Detect Media ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
        const isMedia = (type === 'imageMessage' || type === 'videoMessage');
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');        
        
        // Total ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
		const totalchat = await arifi.chats.all();
		const totalgroup = await arifi.chats.array.filter(v => v.jid.endsWith('g.us'));
        const totalkontak = await arifi.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'));
        
        // Simple Text ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
        const msgPrivateDev = `${global.config.ownertunggal}@s.whatsapp.net`
        const detectCapt = `cmd: ${command}\nnick: ${pushname}`

//================================[ 𝔸𝕣𝕚𝕗𝕚 ℝ𝕒𝕫𝕫𝕒𝕢 𝕆𝔽𝔽𝕀ℂ𝕀𝔸𝕃 ]================================\\
        let resbutton = type == ('listResponseMessage') ? rojak.message.listResponseMessage.title : ''
                /** Read Resbutton
                * @param {string} type
                * @param {button} use This ButtonId // Ngeread Pake ButtonId ya wak!, bukan Pake DisplayText Ntar Lu bilang Error
                * @param {from} Create New Command // Buat Js baru kalau mau tambah fitur biar keren // Contoh: Rules.js, Terus Buat (From, Rules(prefix => jika make Prefix))
                **/

//================================[ 𝔸𝕣𝕚𝕗𝕚 ℝ𝕒𝕫𝕫𝕒𝕢 𝕆𝔽𝔽𝕀ℂ𝕀𝔸𝕃 ]================================\\
        let button = type == ('buttonsResponseMessage') ? rojak.message.buttonsResponseMessage.selectedButtonId : ''
                /** Read Button
                * @param {string} type
                * @param {button} use This ButtonId // Ngeread Pake ButtonId ya wak!, bukan Pake DisplayText Ntar Lu bilang Error
                * @param {from} Create New Command // Buat Js baru kalau mau tambah fitur biar keren // Contoh: Rules.js, Terus Buat (From, Rules(prefix => jika make Prefix))
                **/
                
                if (button == 'rules') { // Contoh // Biar Keren Pake Global.['rules']
                arifi.reply(from, mainWrite.rules(prefix), rojak)
                }
//================================[ 𝔸𝕣𝕚𝕗𝕚 ℝ𝕒𝕫𝕫𝕒𝕢 𝕆𝔽𝔽𝕀ℂ𝕀𝔸𝕃 ]================================\\
        let buttontitle = type == ('buttonsResponseMessage') ? rojak.message.buttonsResponseMessage.title : ''
                
                /** Read Resbutton
                * @param {string} type
                * @param {button} use This ButtonId // Ngeread Pake ButtonId ya wak!, bukan Pake DisplayText Ntar Lu bilang Error
                * @param {from} Create New Command // Buat Js baru kalau mau tambah fitur biar keren // Contoh: Rules.js, Terus Buat (From, Rules(prefix => jika make Prefix))
                **/
//================================[ 𝔸𝕣𝕚𝕗𝕚 ℝ𝕒𝕫𝕫𝕒𝕢 𝕆𝔽𝔽𝕀ℂ𝕀𝔸𝕃 ]================================\\

        const direct = (teks) => {
            arifi.sendMessage(from, `${teks}`, MessageType.text, { quoted: rojak, thumbnail: fs.readFileSync(ImgSettings.pathOwnerFeat)
            })
        }
        const print = function (teks) {
                if (typeof teks !== 'string') teks = require('util').inspect(teks)
                teks = require('util').format(teks)
            return arifi.reply(from, teks, rojak)
        }
        function monospace(string) {
        return '```' + string + '```'
        }
        function Json(objectPromise) {
           var objectString = JSON.stringify(objectPromise, null, 2)
           var parse = util.format(objectString)
        if (objectString == undefined) {
           parse = util.format(objectPromise)
        }
        function groupCreate(nama, member){
           let anu = arifi.groupCreate(nama, member)
           return anu
           .catch((err) => reply(err))
           }
        }
        const fimg = {
	         key:
        	 { fromMe: false,
	         participant: ticks.FacebookB, ...(from ? 
	         { remoteJid: "status@broadcast" } : {}) },
	         message: { "imageMessage": { "mimetype": "image/jpeg","caption": detectCapt, 'jpegThumbnail': fs.readFileSync(ImgSettings.pathThumbl)}}
	        }
	        const fvide = {
        	 key:
	         { fromMe: false,
	         participant: ticks.FacebookB, ...(from ? 
	         { remoteJid: "status@broadcast" } : {}) },
	         message: { "videoMessage": { "caption": detectCapt, 'jpegThumbnail': fs.readFileSync(ImgSettings.pathThumbl)}}
        	}
        	const fdoc = {
        	 key:
	         { fromMe: false,
	         participant: ticks.FacebookB, ...(from ? 
	         { remoteJid: "status@broadcast" } : {}) },
	         message: { "documentMessage": { "title": detectCapt, 'jpegThumbnail': fs.readFileSync(ImgSettings.pathThumbl)}}
        	}

	    if (isCmd && isGroup) { // Console.log From Group Message ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
            console.log(color('[ GROUP ]', 'yellow'), color(moment(rojak.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'cyan'), color('from', 'pink'), bgcolor(pushname), color('in', 'blue'), color(groupMetadata.subject))
            }
        if (!command) console.log(rojak)
            if (isCmd && !isGroup) { // Console.log From Private Message ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
            console.log(brightcolor.brightYellow('[ PRIVATE ]'), color(moment(rojak.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'cyan'), bgcolor(`${command}`, 'green'))
            }
        
        let authorname = arifi.contacts[from] != undefined ? arifi.contacts[from].vname || arifi.contacts[from].notify : undefined
	    	if (authorname != undefined) { 
	    	} else { 
	    	authorname = groupName 
	    	}

//================================[ 𝔸𝕣𝕚𝕗𝕚 ℝ𝕒𝕫𝕫𝕒𝕢 𝕆𝔽𝔽𝕀ℂ𝕀𝔸𝕃 ]================================\\           
		switch (command) {
		        /** Tambah Fitur Disini
		        * @param {prefix +} readnya ke [const] command
		        * @param {case} Tambahkan { Sebelum Membuat [Object]
		        * @param {break} Tambahkan } Sebelum Break
		        **/
		        case prefix + 'menu':
                case prefix + 'help': {
                let txtm_ = `*PENA BOT*\n\n`
                txtm_ += `*Version* : Type.v 18. 4. 9\n`
                txtm_ += `*Developer* : @${msgPrivateDev.split("@")[0]}\n\n`
                txtm_ += `*• DETEKSI*\n`
                txtm_ += `${prefix}public\n`
                txtm_ += `${prefix}self\n`
                txtm_ += `${prefix}antical <on/off>l\n`
                txtm_ += `${prefix}updategroup <on/off>\n`
                txtm_ += `${prefix}bugc <on/off>\n`
                txtm_ += `${prefix}antidelete <on/off>\n`
                txtm_ += `${prefix}welcome <on/off>\n\n`
                txtm_ += `*• GRUP*\n`
                txtm_ += `${prefix}buka\n`
                txtm_ += `${prefix}tutup\n\n`
                txtm_ += `*• STIKER*\n`
                txtm_ += `${prefix}stiker\n`
                txtm_ += `${prefix}stikerwm <text | text>\n`
                txtm_ += `${prefix}stikergif`
                let gbutsan = [{buttonId: `rules`, buttonText: {displayText: '🗒️ RULES'}, type: 1}]
                let mhan = (await arifi.prepareMessageMedia(fs.readFileSync(ImgSettings.pathThumbl), 'imageMessage', {thumbnail: fs.readFileSync(ImgSettings.pathImgToko)})).imageMessage 
                let gbuttonan = { contentText: `${txtm_}`, footerText: settings.footer, imageMessage: mhan, buttons: gbutsan, headerType: 4
                }
                await arifi.sendMessage(from, gbuttonan, MessageType.buttonsMessage, { quoted: fimg, contextInfo: { mentionedJid: [msgPrivateDev], externalAdReply: { title: "Klik Disini!", body: "Created By @arifirazzaq2001", previewType: "PHOTO", thumbnail: fs.readFileSync(ImgSettings.pathAdReply), thumbnailUrl: "https://i.ibb.co/y5vVG3z/401a4b3806bbd06bab7618af2ae4b262.jpg", sourceUrl: "https://instagram.com/arifirazzaq2001"}
                }
             })
            }
            break
            
            case prefix + 'stiker':
            case prefix + 'stikerwm':
            case prefix + 'stikerwm':
            case prefix + 'stikergif': {
                    const namaPacks = q.substring(0, q.indexOf('|') - 1)
                    const authorPacks = q.substring(q.lastIndexOf('|') + 2)
                    arifi.reply(from, global.db.mess.wait, rojak)
                    let stiker_wm = JSON.parse(JSON.stringify(rojak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    let dlstiker_wm = await arifi.downloadAndSaveMediaMessage(stiker_wm)
                    let stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2" //not sure what this does
                    let packname = namaPacks;
                    let author = authorPacks;
                    let ran = getRandom('.webp')
                    let exifnya = getRandom('.exif')
                    let googlelink = `https://youtube.com/channel/UCoDF8iQJAJ_KSNGEXqilRxQ`;
                    let applelink = `https://wa.me/6281261324817?text=assalamualaikum+bang+arifi+ganteng`;
                    let json = { "sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink }
                    let len = JSON.stringify(json).length
                    let f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
                    let aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
                    if (len > 256) {
                        len = len - 256
                        aaa.unshift(0x01)
                    } else {
                        aaa.unshift(0x00)
                    }
                    let fff = Buffer.from(aaa)
                    let ffff = Buffer.from(JSON.stringify(json))

                    if (len < 16) {
                        len = len.toString(16)
                        len = "0" + len
                    } else {
                        len = len.toString(16)
                    }
                    let ff = Buffer.from(len, "hex")
                    let wm = Buffer.concat([f, ff, fff, ffff])
                    fs.writeFile(exifnya, wm, function (err) {
                        ffmpeg(`./${dlstiker_wm}`)
                            .input(dlstiker_wm)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(dlstiker_wm)
                                arifi.reply(from, global.db.mess.error, rojak)
                            })
                            .on('end', function () {
                                console.log('Finish')
                                exec(`webpmux -set exif ${exifnya} ${ran} -o ${ran}`, async (error) => {
                                    if (error) return arifi.reply(from, global.db.mess.error, rojak)
                                    await arifi.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: rojak })
                                    fs.unlinkSync(dlstiker_wm)
                                    fs.unlinkSync(ran)
                                })
                            })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    });
                }
                break
                
                case prefix + 'public': {
                     if (!rojak.key.fromMe && !isOwner) return arifi.reply(from, global.db.mess.OnlyOwner, rojak)
                     if (isPublic === true) return
                        isPublic = true
                     arifi.reply(from, global.db.mess.fromMe.public, rojak)
                }
                break
                
                case prefix + 'self': {
                     if (!rojak.key.fromMe && !isOwner) return arifi.reply(from, global.db.mess.OnlyOwner, rojak)
                     if (isPublic === false) return
                        isPublic = false
                     arifi.reply(from, global.db.mess.fromMe.self, rojak)
                }
                break
                
                case prefix + 'bugc': { 
                     if (!rojak.key.fromMe && !isOwner) return arifi.reply(from, global.db.mess.OnlyOwner, rojak)
                     if (args.length < 1) return arifi.reply(from, global.db.mess.onoff, rojak)
                     if (args[0] === "on") {
                     if (bugc === true) return
                        bugc = true
                        arifi.reply(from, global.db.mess.success.caseon, rojak)
                     } else if (args[0] === "off") {
                     if (bugc === false) return
                        bugc = false
                        arifi.reply(from, global.db.mess.success.caseoff, rojak)
                     } else {
                        arifi.reply(from, global.db.mess.onoff, rojak)
                        }
                     }
                break
                
                case prefix + 'createg':
                case prefix + 'creategroup':
                case prefix + 'creategrup': {
                     if (!rojak.key.fromMe && !isOwner) return arifi.reply(from, global.db.mess.OnlyOwner, rojak)
				     if (rojak.message.extendedTextMessage != undefined){
				     let argz = args[0].split('|')
				     let mentioned = rojak.message.extendedTextMessage.contextInfo.mentionedJid
				     let aneh = arifi.groupCreate(argz[0], mentioned)
				     Json(aneh)
				     arifi.reply(from, `Penggunaan ${prefix}creategrup namagrup|@tag`, rojak)
				     }
				}
				break
				
				case prefix + 'buka': {
                     if (!isBotGroupAdmins) return arifi.reply(from, global.db.mess.BotAdmin, rojak)
                     if (!rojak.key.fromMe && !isOwner) return arifi.reply(from, global.db.mess.OnlyOwner, rojak)
                        let anu = await arifi.groupSettingChange(from, GroupSettingChange.messageSend, false)
                     Json(anu)
                     }
                break
                
                case prefix + 'tutup': {
                     if (!isBotGroupAdmins) return arifi.reply(from, global.db.mess.BotAdmin, rojak)
                     if (!rojak.key.fromMe && !isOwner) return arifi.reply(from, global.db.mess.OnlyOwner, rojak)
                        let anu = await arifi.groupSettingChange(from, GroupSettingChange.messageSend, true)
                     Json(anu)
                    } 
                break
                     
//================================[ BATAS EXPERIMENT ]================================\\
//================================[ JANGAN DI GANGGU BATASAN DIBAWAH ]================================\\
//================================[ BIARIN AJA, KALAU MAU NGEFIX CHAT ARIFI ]================================\\
//================================[ BIAR SAMA SAMA NGEMBANGIN BASE ]================================\\
                
                // Experimen / Belum Siap
                case prefix + 'welcome': { // belum Detect (kalau bisa Ngefix, Chat Aku Ya, Masuk Grup Team // No WhatsApp Arifi : +62 812-6132-4817
                     if (!rojak.key.fromMe && !isOwner) return arifi.reply(from, global.db.mess.OnlyOwner, rojak)
                     if (args.length < 1) return arifi.reply(from, global.db.mess.onoff, rojak)
                   if (args[0] === 'on') {
                   if (isWelcome === true) return
                       isWelcome = true
                       arifi.reply(from, global.db.mess.success.caseon, rojak)
                   } else if (args[0] === 'off') {
                   if (isWelcome === false) return
                      isWelcome = false
                      arifi.reply(from, global.db.mess.success.caseoff, rojak)
                   } else {
                      arifi.reply(from, global.db.mess.onoff, rojak)
                      }
                }
                break
                
                // Experimen / Belum Siap
                case prefix + 'antidelete': { // belum Detect (kalau bisa Ngefix, Chat Aku Ya, Masuk Grup Team // No WhatsApp Arifi : +62 812-6132-4817
                     if (!rojak.key.fromMe && !isOwner) return arifi.reply(from, global.db.mess.OnlyOwner, rojak)
                     if (args.length < 1) return arifi.reply(from, global.db.mess.onoff, rojak)
                   if (args[0] === 'on') {
                   if (isAntidelete === true) return
                       isAntidelete = true
                       arifi.reply(from, global.db.mess.success.caseon, rojak)
                   } else if (args[0] === 'off') {
                   if (isAntidelete === false) return
                      isAntidelete = false
                      arifi.reply(from, global.db.mess.success.caseoff, rojak)
                   } else {
                      arifi.reply(from, global.db.mess.onoff, rojak)
                     }
                }
                break
                
                // Experimen / Belum Siap
                case prefix + 'updategroup': { // belum Detect (kalau bisa Ngefix, Chat Aku Ya, Masuk Grup Team // No WhatsApp Arifi : +62 812-6132-4817
                     if (!rojak.key.fromMe && !isOwner) return arifi.reply(from, global.db.mess.OnlyOwner, rojak)
                     if (args.length < 1) return arifi.reply(from, global.db.mess.onoff, rojak)
                     if (args[0] === "on") {
                     if (isChangeUpdateGroup === true) return
                        isChangeUpdateGroup = true
                        arifi.reply(from, global.db.mess.success.caseon, rojak)
                     } else if (args[0] === "off") {
                     if (isChangeUpdateGroup === false) return
                        isChangeUpdateGroup = false
                        arifi.reply(from, global.db.mess.success.caseoff, rojak)
                     } else {
                        arifi.reply(from, global.db.mess.onoff, rojak)
                        }
                     }
                     break
                
                // Experiment / Belum Siap
                case prefix + 'anticall': { // belum Detect (kalau bisa Ngefix, Chat Aku Ya, Masuk Grup Team // No WhatsApp Arifi : +62 812-6132-4817
                     if (!rojak.key.fromMe && !isOwner) return arifi.reply(from, global.db.mess.OnlyOwner, rojak)
                     if (args.length < 1) return arifi.reply(from, global.db.mess.onoff, rojak)
                     if (args[0] === "on") {
                     if (isAntiCall === true) return
                        isAntiCall = true
                        arifi.reply(from, global.db.mess.success.caseon, rojak)
                     } else if (args[0] === "off") {
                     if (isAntiCall === false) return
                        isAntiCall = false
                        arifi.reply(from, global.db.mess.success.caseoff, rojak)
                     } else {
                        arifi.reply(from, global.db.mess.onoff, rojak)
                        }
                     }
                     break
                     
//================================[ BATAS EXPERIMENT ]================================\\
//================================[ JANGAN DI GANGGU BATASAN DIATAS ]================================\\
//================================[ BIARIN AJA, KALAU MAU NGEFIX CHAT ARIFI ]================================\\
//================================[ BIAR SAMA SAMA NGEMBANGIN BASE ]================================\\
            
            }
    } catch (err) {
        console.log(err)
		 err = String(err)
            if (!err.includes("this.isZero")) {
                const time_error = moment.tz('Asia/Jakarta').format('HH:mm:ss')
                console.log(time_error, err)
                }
            }
        }