import { GuildMemberManager, MessageEmbed, User } from "discord.js";
import { Discord, SimpleCommand, SimpleCommandMessage, SimpleCommandOption, SimpleCommandOptionType } from "discordx";
@Discord()
class Kick {
    @SimpleCommand('say')
    async execute(@SimpleCommandOption("message", { type: SimpleCommandOptionType.String }) message: String, command: SimpleCommandMessage) {
        if (command.message.member.permissions.has("MANAGE_MESSAGES")) {
            if (!command.message.author.bot && command.message.channel.isText() && command.message.channel.type!="DM"){
                command.message.channel.bulkDelete(1);
                command.message.channel.send("" + message + "");
            }

        }
        else {
            const embed = new MessageEmbed()
                .setTitle("Une erreur est survenu") //Titre de l'embed
                .setColor("RED") //changer la couleur de l'embed
                .setTimestamp() //affiche l'heure ou à été executé la commande
                .setDescription("Vous n'avez pas la permission pour faire parler le bot")
            command.message.author.send({ embeds: [embed] }); //Envoyer l'embed à l'autheur de la commande
            command.message.channel.send({ embeds: [embed] }); //Envoyer l'embed 
        }
    }
    }
