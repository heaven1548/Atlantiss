// this is where you add your stuff for when a users joins

module.exports = async (member) => {
  
    // this is finding the welcome channel
    const channel = member.guild.channels.cache.find(ch => ch.name === '「📌」𝗪-e-l-c-o-m-e');
    if (!channel) return;
    
    // this is sendint the message
    channel.send(`WELCOME ${member} TO EXILS COMMUNITY HAVE FUN!`); 
  
  };

