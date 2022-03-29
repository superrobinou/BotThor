import { GuildMemberManager, MessageEmbed, User } from "discord.js";
import { Discord, SimpleCommand, SimpleCommandMessage, SimpleCommandOption, SimpleCommandOptionType } from "discordx";
@Discord()
class Kick {
    @SimpleCommand('unmute')
    async execute(@SimpleCommandOption("user", { type: SimpleCommandOptionType.User }) user: User, command: SimpleCommandMessage) {
        if (command.message.member.permissions.has("ADMINISTRATOR")) {
            if (user.constructor.name != "DiscordAPIError") {
                var member = command.message.mentions.members.first();
                console.log(member);
                if (member.kickable) {
                    member.roles.remove("958056372887502928");
                    const embed = new MessageEmbed()
                        .setTitle("mute")
                        .setColor("GREEN")
                        .setTimestamp()
                        .setDescription(member.displayName + " a été unmute avec succès.")
                    command.message.reply({ embeds: [embed] });
                }
                else {
                    const embed = new MessageEmbed()
                        .setTimestamp()
                        .setColor("RED")
                        .setTitle("Une erreur est survenu")
                        .setDescription("Il est impossibe d'unmute ce membre.")
                    command.message.reply({ embeds: [embed] });
                }
            }
            else {
                const embed = new MessageEmbed()
                    .setTitle("Une erreur est survenu")
                    .setColor("RED")
                    .setTimestamp()
                    .setDescription("Un problême est survenue lors de l'unmute, vous n'avez pas ou mal mentionné le membre à unmute")
                command.message.reply({ embeds: [embed] });
            }
        }
        else {
            const embed = new MessageEmbed()
                .setTitle("Une erreur est survenu") //Titre de l'embed
                .setColor("RED") //changer la couleur de l'embed
                .setTimestamp() //affiche l'heure ou à été executé la commande
                .setDescription("Vous n'avez pas la permission pour unmute un membre")
            command.message.channel.send({ embeds: [embed] }); //Envoyer l'embed 
            command.message.author.send({ embeds: [embed] }); //Envoyer l'embed à l'autheur de la commande
        }
    }
}
export default Kick;