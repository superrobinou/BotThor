import { Channel, CommandInteraction } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";
import dotenv from 'dotenv';
@Discord()
class SetupBasic{
    @Slash('basicvoc')
    async basic(@SlashOption("vocchannel") vocchannel:Channel,interaction:CommandInteraction){
        if(!vocchannel||!!(vocchannel.isVoice() && vocchannel.type=="GUILD_VOICE")){interaction.reply('les arguments ne sont pas bons');}
        else if(vocchannel.isVoice() && vocchannel.type=="GUILD_VOICE"){
        }
    }
}
export default SetupBasic;