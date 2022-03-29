import { MessageEmbed } from "discord.js";
import { Discord, SimpleCommand, SimpleCommandMessage } from "discordx";

@Discord()

class Stats {
    @SimpleCommand('serverstats')
    async execute(command: SimpleCommandMessage) {
        const embed = new MessageEmbed()
            .setTitle("Statistiques du serveur :")
            .setColor("BLUE")
            .setTimestamp()
            .setDescription("Nous actualisons toutes les données :📡")
        command.message.reply({ embeds: [embed] });
        setTimeout(this.fonctionAExecuter.bind(command), 15000); //On attend 15 secondes avant d'exécuter la fonction
    }
    fonctionAExecuter(command:SimpleCommandMessage) {
        const embed = new MessageEmbed()
            .setTitle("Statistiques du serveur :")
            .setColor("BLUE")
            .setTimestamp()
            .setDescription("D'autres données seront bientôt disponible. Un peux de patience")
            .addField(" \u200B ", "**Channels** : ` " + `${command.message.client.channels.cache.size}` + " `")

        command.message.channel.send({ embeds: [embed] });
    }
    @SimpleCommand('botstats')
    async execute2(command: SimpleCommandMessage) {
        const embed = new MessageEmbed()
            .setTitle("Statistiques du serveur :")
            .setColor("BLUE")
            .setTimestamp()
            .setDescription("Nous actualisons toutes les données :📡")
        command.message.reply({ embeds: [embed] });
        setTimeout(this.fonctionAExecuter1.bind(command), 15000); //On attend 15 secondes avant d'exécuter la fonction
    }
fonctionAExecuter1(command:SimpleCommandMessage) {
    const embed = new MessageEmbed()
        .setTitle("Statistiques du bot :")
        .setColor("BLUE")
        .setTimestamp()
        .setDescription("D'autres données seront bientôt disponible. Un peux de patience")
        .addField(" \u200B ", "**Servers** : ` " + `${command.message.client.guilds.cache.size}` + " `")
        .addFields(
            { name: "**Servers** : ", value: '@ThorCraft Bot#6481' },
            { name: 'Créateur', value: 'ITcomputing' },


        )
    command.message.channel.send({ embeds: [embed] });
}

}
export default Stats;