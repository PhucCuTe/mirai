module.exports.config = {
    name: "ytb",
    version: "1.0.3",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Tải video facebook",
    commandCategory: "other",
    cooldowns: 5,
    dependencies: {
        "axios": ""
    }
};
module.exports.run = async function({
    api,
    event,
    getText,
    args
}) {
    try {
    const rd = Math.floor(Math.random() * 99999999999)
    const a = require("axios");
    const fs = require("fs-extra");
    const r = await a.get(`https://botviet.me/api/youtube?url=${args[0]}`);
    {
        const video = r.data.video;
        const p = __dirname + `/cache/${rd}.mp4`;
        let k = (await a.get(`${video}`, {

            responseType: 'arraybuffer'

        })).data;
        fs.writeFileSync(p, Buffer.from(k, "utf-8"));

        return api.sendMessage({
            body: "",
            attachment: fs.createReadStream(p)
        }, event.threadID, (() => fs.unlinkSync(p)), event.messageID);
    }
  }
}
    