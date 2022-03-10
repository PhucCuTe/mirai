
module.exports.config = {
    name: "hi",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DinhPhuc",
    description: "",
    commandCategory: "other",
    usages: "",
    cooldowns: 0,
 };
module.exports.handleEvent = async ({ event, api, Users, args, utils }) => {
    let name = await Users.getNameUser(event.senderID);
    var sticker1 = [
 "295919034189507","355664048350876","466039991430797","254597706003600","1598327337146754","499671073448729","255662728270222","792370960880045","4046879105359277","832506693526136","1747083968936188","237318230421170","237320493754277","2041012539459553","2041015182792622"
 
        
  
];
var stk1 = sticker1[Math.floor(Math.random() * sticker1.length)];
    var msg = {
                body: `Xin chào ${name}\nChúc bạn một ngày tốt lành ❤️.`,
              mentions: [{ tag: name, id: event.senderID }]
            }
    if (event.body.toLowerCase() == "hi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hello"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "chào"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hí"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "lô"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hii"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        }
     var callback = () => api.sendMessage({sticker : stk1}, event.threadID).on('close',() => callback());   
module.exports.run = async ({ event, api,args }) => {
return api.sendMessage("cút",event.threadID, event.messageID)
    }