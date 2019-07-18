import { expect } from 'chai';
import { Kingdom } from '../src/kingdom'

let kingdom: Kingdom;

describe('Test cases for Kingdom Class', () => {
    it('check character correct emblem is picked up', () => {
        kingdom = new Kingdom("water")
        expect(kingdom.emblem).to.equal("octopus");
    });

    it('check character length object created properly', () => {
        kingdom = new Kingdom("water")
        expect(kingdom.characterMap).to.eql(
            { o: 2, c: 1, t: 1, p: 1, u: 1, s: 1 }
        );
    });

    it('check whether kingdom is decrypting the message properly with valid data', () => {
        kingdom = new Kingdom("land")
        expect(kingdom.decryptMessage(`Die or play the tame of thrones`)).to.equal(true);
    });

    it('check whether kingdom is decrypting the message properly with invalid data', () => {
        kingdom = new Kingdom("water")
        expect(kingdom.decryptMessage(`Summer is coming`)).to.equal(false);
    });

    it('check whether kingdom is decrypting the message properly with different kingdom and message', () => {
        kingdom = new Kingdom("air")
        expect(kingdom.decryptMessage(`Drag on Martin!`)).to.equal(false);
    });

    it('check createCharacterMap function working properly', () => {
        kingdom = new Kingdom("land")
        expect(kingdom.createCharacterMap()).to.eql(
            { p: 1, a: 2, n: 1, d: 1 }
        );
    });
});