import "reflect-metadata";
import path, { dirname } from "path";
import { Client } from 'discordx';
import { Channel, Intents, Message } from 'discord.js';
import dotenv from 'dotenv';
import { fileURLToPath } from "url";
import { importx } from "@discordx/importer";
var channelsVoice:Map<String,String>=new Map<String,String>();
var state = 0;
var presences = [
    { type: 'PLAYING', message: 'Minecraft' }
];
var client = new Client({
    simpleCommand: {
        prefix: "+",
    },
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ],
    botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)],
    silent: false
});

client.on("ready", async () => {
    // to create/update/delete discord application commands
    await client.initApplicationCommands({ global: { log: true }, guild: { log: true } });
    await client.initApplicationPermissions(true);
    console.log("Le Bot est connecté");
    setInterval(() => {
        state = (state + 1) % presences.length;
        const presence = presences[state];

        client.user.setActivity(presence.message, { type: presence.type });
    }, 30000);
});
client.on('voiceStateUpdate',async(oldMember,newMember)=>{
    let oldMemberchannel=oldMember.channel;
    let newMemberchannel=newMember.channel;
    if (newMemberchannel != null && newMemberchannel.id == process.env.VOCCHANNEL){
        let newCategoryChannel=newMemberchannel.parent;
        if(newCategoryChannel){
            const newVoiceChannel=await newMemberchannel.guild.channels.create('salon de '+newMember.member.user.username,{type:'GUILD_VOICE',parent:newCategoryChannel.id});
            console.log(newVoiceChannel);
            newMember.member.voice.setChannel(newVoiceChannel);
            channelsVoice.set(newVoiceChannel.id,newMember.member.id);
        }
    }
    else if (newMemberchannel === null) {
        console.log(channelsVoice);
        console.log(oldMemberchannel.id);
        if(channelsVoice.has(oldMemberchannel.id)){
            var channelmemberid=oldMember.member.id;
            var ownerid=channelsVoice.get(oldMemberchannel.id);
            if(oldMemberchannel.members.size==0){
                oldMemberchannel.delete();
            }
        }
        // User leaves a voice channel

    }
});
client.on('interactionCreate', async interaction => {
    client.executeInteraction(interaction);
});
client.on("messageCreate", (message: Message) => {
    client.executeCommand(message);
});
async function start() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const folder = path.resolve(__dirname, '..');
    dotenv.config({ path: folder + '/globals.env' });
    console.log('chargement de configuration: ' + folder);
    var BOT_TOKEN = process.env.BOT_TOKEN;
    console.log(BOT_TOKEN);
    await importx(__dirname + "/commands/**/*.{ts,js}");
    client.login(BOT_TOKEN);
}

start();