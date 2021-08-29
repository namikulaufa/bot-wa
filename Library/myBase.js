const {
 MessageType,
 Mimetype,
 WAConnection,
 mentionedJid
} = require("@adiwajshing/baileys");
const { 
 resolve
} = require("path");

const util = require("util");
const fs = require('fs-extra');
const axios = require('axios');
const request = require('request');
let conn = require('../run');
let arifi = conn.arifi

// Set ImageBot ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
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
    dev,
    cr, 
    hackers
} = settings

// Set numberOfficial ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let ticks = JSON.parse(fs.readFileSync('./handler/setting/setVerify.json'));
let {
    whatsapp, 
    FacebookB
} = ticks
//================================[ 𝔸𝕣𝕚𝕗𝕚 ℝ𝕒𝕫𝕫𝕒𝕢 𝕆𝔽𝔽𝕀ℂ𝕀𝔸𝕃 ]================================\\
const troli = {
key : {
participant : ticks.whatsapp },
message: {
orderMessage: {
itemCount : 999999999999999999999999999,
status: 99999999999999999999,
surface : 9999999999999999,
message: settings.hackers,
orderTitle: settings.teksReply,
thumbnail: ImgSettings.pathImgStatus,
sellerJid: ticks.FacebookB
}
    }
		}
		const reply = (from, text, rojak) => {
    arifi.sendMessage(from, text, MessageType.text, {quoted: rojak})
}
exports.sendText = (from, text) => {
    arifi.sendMessage(from, text, MessageType.text)
}
exports.sendImage = (from, image, caption, rojak) => {
	arifi.sendMessage(from, image, MessageType.image, {quoted: rojak, caption: caption})
}
exports.sendVideo = (from, video, caption, rojak) => {
	arifi.sendMessage(from, video, MessageType.video, {quoted: rojak, caption: caption})
}
exports.sendGif = (from, gif) => {
	arifi.sendMessage(from, gif, MessageType.video, {mimetype: "video/gif"})
}
exports.reply = (from, text, rojak) => {
    arifi.sendMessage(from, text, MessageType.text, {quoted: rojak})
}
exports.sendSticker = (from, filename, rojak) => {
	arifi.sendMessage(from, filename, MessageType.sticker, {quoted: rojak})
}
exports.sendKontak = (from, nomor, nama) => {
	const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	arifi.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact)
}
exports.sendTroliSticker = (from, filename, rojak) => {
	arifi.sendMessage(from, filename, MessageType.sticker, {quoted: troli})
}
exports.sendLiveLocation = async function(from, sticker){
	let anu = await arifi.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	arifi.sendMessage(from, sticker, MessageType.sticker, { quoted: { key: { fromMe: false, participant: ticks.FacebookB, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption": "PENA BOT", "jpegThumbnail": fs.readFileSync(ImgSettings.pathAdReply)} } } })
}
exports.sendFakeStatus = (from, teks, faketeks) => {
	arifi.sendMessage(from, teks, MessageType.text, { quoted: { key: { fromMe: false, participant: ticks.FacebookB, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(ImgSettings.pathAdReply)} } } })
}
exports.FakeStatusForwarded = (from, teks, faketeks) => {
	arifi.sendMessage(from, teks, MessageType.text, { quoted: { key: { fromMe: false, participant: ticks.FacebookB, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(ImgSettings.pathAdReply)} }, contextInfo: {"forwardingScore": 999, "isForwarded": true} } })
}
exports.FakeStatusImgForwarded = (from, image, caption, faketeks) => {
	arifi.sendMessage(from, image, MessageType.image, { quoted: { key: { fromMe: false, participant: ticks.FacebookB, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(ImgSettings.pathAdReply)} } }, caption: caption, contextInfo: {"forwardingScore": 999, "isForwarded": true} })
}
exports.sendFakeStatusWithImg = (from, image, caption, faketeks) => {
	arifi.sendMessage(from, image, MessageType.image, { quoted: { key: { fromMe: false, participant: ticks.FacebookB, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(ImgSettings.pathAdReply)} } }, caption: caption })
}
exports.sendMention = (from, text, orangnya, rojak) => {
	arifi.sendMessage(from, text, MessageType.extendedText, {contextInfo: {mentionedJid: orangnya}, quoted: rojak})
}
exports.hideTag = async function(from, text){
	let anu = await arifi.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	arifi.sendMessage(from, text, MessageType.text, {contextInfo: {"mentionedJid": ane}})
}
exports.hideTagImg = async function(from, image){
	let anu = await arifi.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	arifi.sendMessage(from, image, MessageType.image, {contextInfo: {"mentionedJid": ane}})
}
exports.hideTagSticker = async function(from, sticker){
	let anu = await arifi.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	arifi.sendMessage(from, sticker, MessageType.sticker, {contextInfo: {"mentionedJid": ane}})
}
exports.hideTagKontak = async function(from, nomor, nama){
	let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	let anu = await arifi.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	arifi.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
exports.FakeTokoForwarded = (from, teks, fake) => {
	anu = {
		key: {
			fromMe: false,
			participant: ticks.FacebookB, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(ImgSettings.pathAdReply)
					},
					"title": fake,
					"description": settings.teksReply,
					"currencyCode": "IDR",
					"priceAmount1000": "50000000",
					"retailerId": settings.cr,
					"productImageCount": 1
				},
				"businessOwnerJid": ticks.FacebookB
		}
	}
}
	arifi.sendMessage(from, teks, MessageType.text, {quoted: anu, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}
exports.sendFakeToko = (from, teks, fake) => {
	anu = {
		key: {
			fromMe: false,
			participant: ticks.FacebookB, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(ImgSettings.pathAdReply)
					},
					"title": fake,
					"description": settings.teksReply,
					"currencyCode": "IDR",
					"priceAmount1000": "50000000",
					"retailerId": settings.cr,
					"productImageCount": 1
				},
				"businessOwnerJid": ticks.FacebookB
		}
	}
}
	arifi.sendMessage(from, teks, MessageType.text, {quoted: anu})
}
exports.sendFakeThumb = async function(from, url, title, desc, comnya, fotonya){
	var anoim = {
		detectLinks: false
	}
	var rojak = await arifi.generateLinkPreview(url)
	rojak.title = title
	rojak.description = desc
	rojak.jpegThumbnail = fotonya ? fotonya : fs.readFileSync(ImgSettings.pathAdReply)
	rojak.canonicaUrl = comnya
	arifi.sendMessage(from, rojak, MessageType.extendedText, anoim)
}
exports.sendFakeImg = function(from, imageasli, caption, thumbnail, rojak){
	let ai = {
		thumbnail: thumbnail ? thumbnail : fs.readFileSync(ImgSettings.pathAdReply),
		quoted: rojak ? rojak : ''
	}
	arifi.sendMessage(from, imageasli, MessageType.image, ai)
}
exports.sendMediaURL = async(to, url, text="", rojak, mids=[]) =>{
	if(mids.length > 0){
		text = normalizeMention(to, text, mids)
	}
	const fn = Date.now() / 10000;
	const filename = fn.toString()
	let mime = ""
	var download = function (uri, filename, callback) {
		request.head(uri, function (err, res, body) {
			mime = res.headers['content-type']
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
	};
	download(url, filename, async function () {
		console.log('done');
		let media = fs.readFileSync(filename)
		let type = mime.split("/")[0]+"Message"
		if(mime === "image/gif"){
			type = MessageType.video
			mime = Mimetype.gif
		}
		if(mime.split("/")[0] === "audio"){
			mime = Mimetype.mp4Audio
		}
		arifi.sendMessage(to, media, type, { quoted: rojak, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
		
		fs.unlinkSync(filename)
	});
}
exports.getGroupAdmins = function(participants){
    admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
exports.setName = async function(query){
    const response = await arifi.updateProfileName(query)
    return response
}
exports.setBio = async function(query){
    const response = await arifi.setStatus(query)
    return response
}
exports.kick = function(from, orangnya){
	for (let i of orangnya){
		arifi.groupRemove(from, [i])
	}
}
exports.add = function(from, orangnya){
	arifi.groupAdd(from, orangnya)
}
exports.promote = function(from, orangnya){
	arifi.groupMakeAdmin(from, orangnya)
}
exports.demote = function(from, orangnya){
	arifi.groupDemoteAdmin(from, orangnya)
}
exports.upTextStatus = function(text){
	arifi.sendMessage('status@broadcast', text, MessageType.extendedText)
}
exports.upImgStatus = function(image, text){
	arifi.sendMessage('status@broadcast', image, MessageType.image, {caption: text})
}
exports.upVidStatus = function(video, text){
	arifi.sendMessage('status@broadcast', video, MessageType.video, {caption: text})
}
exports.createGroup = function(nama, member){
	let a
	arifi.groupCreate(nama, member)
	.then((res) => a = res )
	.catch((err) => a = err)
	return a
}
exports.getGroup = async function(totalchat){
	let grup = []
	let a = []
	let b = []
	for (c of totalchat){
		a.push(c.jid)
	}
	for (d of a){
		if (d && d.includes('g.us')){
			b.push(d)
		}
	}
	for (e of b){
		let ingfo = await arifi.groupMetadata(e)
		grup.push(ingfo)
	}
	return grup
}