const nbx = require("noblox.js");
const Discord = require("discord.js");

module.exports = () => async (message, value) => {
  let channel = message.channel;
  const userid = await nbx.getIdFromUsername(value);

  await nbx.getPlayerInfo(userid).then((playerInfo) => {
    let infoEmbed = new Discord.MessageEmbed()
      .setColor(`BLUE`)
      .setTitle(`${playerInfo.username}'s account`)
      .addField(`Status`, playerInfo.status || "Not available")
      .addField(`Account Age (in days)`, playerInfo.age || "Not available")
      .addField(`Join Date`, playerInfo.joinDate || "Not available")
      .addField(`Description`, playerInfo.blurb || "Not available")
      .setThumbnail(message.author.avatarURL());
    channel.send(infoEmbed);
  });
};
