import { Discord, SimpleCommand, SimpleCommandMessage } from "discordx";

@Discord()

class Test{
    @SimpleCommand('test')
    async execute(command:SimpleCommandMessage) {
        console.log(command);
    }
}
export default Test;