/**
 * Class for Ruler of Southeros
 * 2 params 
 * @param {string} _ruler : assign who is the ruler
 * @param {Array} _allies : allies of the ruler
 * 2 methods and 2 get methods to return class variables
 */

import { Kingdom } from './kingdom';
import { IRulerOfSoutheros } from './interface/IRulerOfSoutheros';

export class RulerOfSoutheros implements IRulerOfSoutheros {

    /**
     * Initialize class parameters
     */
    private _ruler: string;
    private _allies: string[];

    /**
     * Constructor function
     */
    constructor() {
        this._ruler = "None";
        this._allies = [];
    }

    /**
     * Get method for allies
     * Return the allies parameter of class
     */
    public get allies(): string[] {
        return this._allies;
    }

    /**
     * Get method for ruler  
     * Return the ruler param of class as King Shan if 3 or more allies present
     */
    public get ruler(): string {
        if (this._allies.length >= 3)
            this._ruler = "King Shan";
        return this._ruler;
    }

    /**
     * Method for verifying the ally
     * @param {string } message : message to pass to kingdom to verify ally
     * Return type is void
     */
    public findKingdomIsAlly(message: string): void {
        let inputArray: string[] = [];
        if (message.length > 0) {
            message.split(',').forEach(element => {
                inputArray.push(element.replace(/\"/g, "").trim());
            });
            let kingdom = new Kingdom(inputArray[0].toLowerCase());
            if ((this._allies.indexOf(inputArray[0]) === -1) && (kingdom.decryptMessage(inputArray[1].toLowerCase())))
                this._allies.push(inputArray[0]);
        }
    }
}