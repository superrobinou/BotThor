import { GuildMember, GuildMemberManager, MessageEmbed, User } from "discord.js";
import { Discord, SimpleCommand, SimpleCommandMessage, SimpleCommandOption, SimpleCommandOptionType } from "discordx";
@Discord()
class Ban {
    @SimpleCommand('ban')
    async execute(@SimpleCommandOption("user", { type: SimpleCommandOptionType.User }) user:GuildMember, command: SimpleCommandMessage) {
        if (command.message.member.permissions.has("ADMINISTRATOR")) {
            console.log(user.constructor.name);
            if (user.constructor.name !="DiscordAPIError"){
            var member=command.message.mentions.members.first();
            console.log(member);
            if (member.bannable) {
                member.ban();
                const embed = new MessageEmbed()
                    .setTitle("Bannissement")
                    .setColor("GREEN")
                    .setTimestamp()
                    .setDescription(member.displayName + " a été banni avec succès.")
                command.message.reply({ embeds: [embed] });
            }
            else {
                const embed = new MessageEmbed()
                    .setTimestamp()
                    .setColor("RED")
                    .setTitle("Une erreur est survenu")
                    .setDescription("Il est impossible de bannir ce membre.")
                command.message.reply({ embeds: [embed] });
            }
        }
        else{
            const embed = new MessageEmbed()
                .setTitle("Une erreur est survenu")
                .setColor("RED")
                .setTimestamp()
                .setDescription("Un problême est survenue lors du bannissement, vous n'avez pas ou mal mentionné le membre à bannir")
            command.message.reply({ embeds: [embed] });
        }
    }
        else {
            const embed = new MessageEmbed()
                .setTitle("Une erreur est survenu") //Titre de l'embed
                .setColor("RED") //changer la couleur de l'embed
                .setTimestamp() //affiche l'heure ou à été executé la commande
                .setDescription("Vous n'avez pas la permission pour de bannir un membre")
            command.message.channel.send({ embeds: [embed] }); //Envoyer l'embed 
            command.message.author.send({ embeds: [embed] }); //Envoyer l'embed à l'autheur de la commande
        }
}

}
export default Ban;