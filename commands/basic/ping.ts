import { Discord, SimpleCommand, SimpleCommandMessage } from "discordx";

@Discord()

class Ping{
    @SimpleCommand('ping')
    async execute(command:SimpleCommandMessage) {
        command.message.reply('pong!');
    }
}
export default Ping;