/**
 * 
 * Main Class.
 * readInput of this class start the functioning
 * It pass the input to process input to process the data
 */

import * as readline from 'readline';
import { RulerOfSoutheros } from './rulerSoutherosRealm'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export class Main {
    private _rulerObject: RulerOfSoutheros;

    constructor() {
        this._rulerObject = new RulerOfSoutheros();
    };

    /**
     * Method to read input from keyboard.
     * Return type is  is void
     */
    public readInput(): void {
        console.log("Enter your input below\nPres Ctrl+c to exit\n");
        let output: string = "";
        rl.on('line', (input: string) => {
            output = this.processInput(input);
            if (output.length > 0)
                console.log(output);
        });
        rl.on('close', function () {
            console.log('goodbye!');
            process.exit(0);
        });
    }

    /**
     * 
     * Function to process the input messages 
     * Return type {string}
     * @param {string} input : input message coming from readInput method
     */
    public processInput(input: string): string {
        let lowercaseInput = input.toLowerCase();
        let output: string = "";
        let arrOutput: string[] = [];
        if (lowercaseInput.includes(`who is the ruler of southeros`)) {
            output = this._rulerObject.ruler;
        } else if (lowercaseInput.includes(`allies of ruler`) || lowercaseInput.includes(`allies of king shan`)) {
            arrOutput = this._rulerObject.allies;
            output = arrOutput.length >= 3 ? arrOutput.join(', ') : "None";
        } else if (lowercaseInput.includes(`input messages to kingdoms from king shan:`)) {
        } else if (lowercaseInput.includes(`input:`)) {
            let messageInput = input.split(':')[1];
            this._rulerObject.findKingdomIsAlly(messageInput.trim());
        } else {
            output = "Invalid message";
        }
        return output;
    }
}

/**
 * Invoking the readInput method using Main class
 */
let main = new Main();
main.readInput();