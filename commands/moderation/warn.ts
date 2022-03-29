import { Discord, SimpleCommand, SimpleCommandMessage } from "discordx";

@Discord()

class Warn {
    @SimpleCommand('warn')
    async execute(command: SimpleCommandMessage) {
        command.message.reply('pong!');
    }
}
export default Warn;