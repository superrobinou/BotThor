import { MessageEmbed } from "discord.js";
import { Discord, SimpleCommand, SimpleCommandMessage } from "discordx";

@Discord()

class Help {
    @SimpleCommand('help')
    async execute(command: SimpleCommandMessage) {
        const embed = new MessageEmbed()
            .setTitle("Besoin d'aide ?") //Titre de l'embed
            .setColor("AQUA") //changer la couleur de l'embed
            .setTimestamp() //affiche l'heure ou à été executé la commande
            .setURL("") //Vous pouvez ajouter un lien qui sera cliquable via le titre "Besoin d'aide ?"
            .setDescription("Notre bot est en développement, tenez vous informez des nouvelles fonctionnalités du bot via cette commande.")
            .addField("Prefixe", process.env.PREFIX) //affiche le prefix du bot définis avec la commande ci-dessus
            .addField("> Besoin d'aide", ">"+process.env.PREFIX+"help")
            .addField("> Supprimer des messages", ">"+process.env.prefix+"clear [nombre]")
            .addField("> Bannir un membre",">" +process.env.PREFIX+"ban @[membre]")
            .addField("> Expulser un membre", "> "+process.env.PREFIX+"kick @[membre]")
            .addField("> Mute un membre", "> "+process.env.PREFIX+"mute @[membre]")
            .addField("> Unmute un memnbre", ">" +process.env.PREFIX+"unmute @[membre]")
            .addField("> Envoyer un message par le bot", ">"+process.env.PREFIX+"say [message]")
            .addField("> statistiques du serveur", ">"+process.env.PREFIX +"serverstats")
            .addField("> statistiques du bot", ">"+process.env.PREFIX+"botstats")
            .setFooter({ text: "" }) //ajouter du texte qui s'affichera en bas de l'embed

        command.message.channel.send({ embeds: [embed] }); //Envoie l'embed
    }
}
export default Help;