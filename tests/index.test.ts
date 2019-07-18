import { expect } from 'chai';
import * as readline from 'readline';
import { Main } from '../src/index';

let main = new Main();
let input: string;
let result: string;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

after(() => {
    rl.close();
});

describe('Test cases for Main Class', () => {
    it('Check with invalid input data', () => {
        input = `Who is the ruler of Southeros?`;
        result = main.processInput(input);
        expect(result).to.equal('None');
        input = `Allies of Ruler?`;
        result = main.processInput(input);
        expect(result).to.equal('None');
        input = `Input:Air, "Let’s swing the sword together"`;
        main.processInput(input);
        input = `Input:Vishnu, "mohan"`;
        main.processInput(input);
        input = `Input:Ice, "Ahoy! Fight for me with men and money"`;
        main.processInput(input);
        input = `Who is the ruler of Southeros?`;
        result = main.processInput(input);
        expect(result).to.equal('None');
        input = `Allies of Ruler?`;
        result = main.processInput(input);
        expect(result).to.equal('None');
    });

    it('Check with valid input data', () => {
        input = `Who is the ruler of Southeros?`;
        result = main.processInput(input);
        expect(result).to.equal('None');
        input = `Allies of Ruler?`;
        result = main.processInput(input);
        expect(result).to.equal('None');
        input = `Input:Air, "Let’s swing the sword together"`;
        main.processInput(input);
        input = `Input:Ice, "Ahoy! Fight for me with men and money"`;
        main.processInput(input);
        input = `Input:Land, "Die or play the tame of thrones"`;
        main.processInput(input);
        input = `Who is the ruler of Southeros?`;
        result = main.processInput(input);
        expect(result).to.equal('King Shan');
        input = `Allies of Ruler?`;
        result = main.processInput(input);
        expect(result).to.equal('Air, Ice, Land');
    });
});