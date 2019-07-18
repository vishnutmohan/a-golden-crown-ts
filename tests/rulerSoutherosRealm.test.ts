import { expect } from 'chai';
import { RulerOfSoutheros } from '../src/rulerSoutherosRealm';

let ruler: RulerOfSoutheros;
let message: string;

describe('Test cases for Ruler Class', () => {
    it('check allies param is array and having proper number of elements', () => {
        ruler = new RulerOfSoutheros();
        message = `Air, "oaaawaala"`;
        ruler.findKingdomIsAlly(message);
        expect(ruler.allies).to.be.a('array');
        expect(ruler.allies).to.have.lengthOf(1);
        expect(ruler.allies).to.eql(['Air']);
        expect(ruler.ruler).to.equal("None");
        message = `Ice, “Ahoy! Fight for me with men and money"`;
        ruler.findKingdomIsAlly(message);
        expect(ruler.allies).to.be.a('array');
        expect(ruler.allies).to.have.lengthOf(2);
        expect(ruler.allies).to.have.members(['Air', 'Ice']);
        expect(ruler.ruler).to.equal("None");
        message = `Fire, "Drag on Martin!"`;
        ruler.findKingdomIsAlly(message);
        expect(ruler.allies).to.be.a('array');
        expect(ruler.allies).to.have.lengthOf(3);
        expect(ruler.allies).to.have.members(['Air', 'Ice', 'Fire']);
        expect(ruler.ruler).to.equal("King Shan");
    });

    it('check allies param is array and having proper number of elements in case of invalid inputs', () => {
        ruler = new RulerOfSoutheros();
        message = `vishnu, "mohan"`;
        ruler.findKingdomIsAlly(message);
        expect(ruler.allies).to.be.a('array');
        expect(ruler.allies).to.have.lengthOf(0);
        expect(ruler.allies).to.eql([]);
        expect(ruler.ruler).to.equal("None");
        message = ``;
        ruler.findKingdomIsAlly(message);
        expect(ruler.allies).to.be.a('array');
        expect(ruler.allies).to.have.lengthOf(0);
        expect(ruler.allies).to.eql([]);
        expect(ruler.ruler).to.equal("None");
    });

    it('check findKingdomIsAlly working properly with valid data', () => {
        ruler = new RulerOfSoutheros();
        message = `Air, "oaaawaala"`;
        ruler.findKingdomIsAlly(message);
        expect(ruler.allies).to.be.a('array');
        expect(ruler.allies).to.have.lengthOf(1);
        expect(ruler.allies).to.eql(['Air']);
        expect(ruler.ruler).to.equal("None");
    });

    it('check findKingdomIsAlly method working properly with invalid data', () => {
        ruler = new RulerOfSoutheros();
        message = `vishnu, "mohan"`;
        ruler.findKingdomIsAlly(message);
        expect(ruler.allies).to.be.a('array');
        expect(ruler.allies).to.have.lengthOf(0);
        expect(ruler.allies).to.eql([]);
        expect(ruler.ruler).to.equal("None");
        message = ``;
        ruler.findKingdomIsAlly(message);
        expect(ruler.allies).to.be.a('array');
        expect(ruler.allies).to.have.lengthOf(0);
        expect(ruler.allies).to.eql([]);
        expect(ruler.ruler).to.equal("None");
    });
});

