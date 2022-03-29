import { Channel, CommandInteraction } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";
@Discord()
class SetupBasic{
    @Slash('basicvoc')
    async basic(@SlashOption("vocchannel") vocchannel:Channel,interaction:CommandInteraction){
        if(!(vocchannel.isVoice() && vocchannel.type=="GUILD_VOICE")){interaction.reply('les arguments ne sont pas bons');}
        else if(vocchannel.isVoice() && vocchannel.type=="GUILD_VOICE"){
            process.env.VOCCHANNEL=vocchannel.id;
            interaction.reply('configuré');
        }
    }
}
export default SetupBasic;