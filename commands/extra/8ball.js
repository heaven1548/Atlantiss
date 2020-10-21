const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "8ball",
    category: "extra",
    run: async (client, message, args) => {
        const url = `https://no-api-key.com/api/v1/magic8ball`;
	
        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle('magic 8ball response')
			.setColor('#f3f3f3')
            .setDescription(data.response)

        await message.channel.send(embed)
    }
}