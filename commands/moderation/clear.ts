import { MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { Discord, SimpleCommand, SimpleCommandMessage, SimpleCommandOption, SimpleCommandOptionType } from "discordx";

@Discord()

class Clear {
    @SimpleCommand('clear')
    async execute(@SimpleCommandOption("channelnumber",{type:SimpleCommandOptionType.Number}) channels:number,command:SimpleCommandMessage) {
        if (command.message.member.permissions.has("ADMINISTRATOR")) {
        if(channels==undefined){
            const embed = new MessageEmbed()
                .setTitle("Une erreur est survenu") //Titre de l'embed
                .setColor("RED") //changer la couleur de l'embed
                .setTimestamp() //affiche l'heure ou à été executé la commande
                .setDescription("Vous n'avez pas ou mal définis le nombre de message à supprimer")
            command.message.channel.send({ embeds: [embed] });
        }
        else if(isNaN(channels)){
            const embed = new MessageEmbed()
                .setTitle("Une erreur est survenu") //Titre de l'embed
                .setColor("RED") //changer la couleur de l'embed
                .setTimestamp() //affiche l'heure ou à été executé la commande
                .setDescription("Vous n'avez pas ou mal définis le nombre de message à supprimer")
            command.message.channel.send({ embeds: [embed] });
        }
        else {
            var row = new MessageActionRow()
                .addComponents(new MessageButton()
                    .setCustomId("Confirmation de suppression de message")
                    .setLabel("Appuyez pour confirmer")
                    .setStyle("DANGER")
                );
            const embed = new MessageEmbed()
                .setTitle("Confirmation") //Titre de l'embed
                .setColor("BLUE") //changer la couleur de l'embed
                .setTimestamp() //affiche l'heure ou à été executé la commande
                .setDescription("Êtes-vous sûr de vouloir supprimer " + channels + " messages ?")
            command.message.channel.send({ embeds: [embed], components: [row] }); //Envoyer l'embed + le bouton
            command.message.client.on("interactionCreate", interaction => {
                var channel = command.message.channel;
                if(channel.isText() && channel.type!="DM"){
                    channel.bulkDelete(2 + channels);
                }

            })
    }
}
else{
            const embed = new MessageEmbed()
                .setTitle("Une erreur est survenu") //Titre de l'embed
                .setColor("RED") //changer la couleur de l'embed
                .setTimestamp() //affiche l'heure ou à été executé la commande
                .setDescription("Vous n'avez pas la permission pour supprimer les messages")
            command.message.channel.send({ embeds: [embed] }); //Envoyer l'embed 
}
}
}
export default Clear;