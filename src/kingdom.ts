/***
 * Class for Kingdom
 * 
 * Each kingdom will be having a name and emblem
 * Also there will be a method to decrypt the message from other kingdoms
 */

import { IStringStringType } from './interface/IStringStringType';
import { IStringNumType } from './interface/IStringNumType';
import { IKingdom } from './interface/IKingdom';

/**
 * map existing kingdom with corresponding emblems
 */
let kingdomEmblemMap: IStringStringType = {
    "land": "panda",
    "water": "octopus",
    "ice": "mammoth",
    "air": "owl",
    "fire": "dragon"
}

export class Kingdom implements IKingdom {
    /**
     * Initialize class parameters
     */
    private _name: string;
    private _emblem: string;
    private _characterMap: IStringNumType;

    /**
     * Constructor function
     * @param {string} name : pass name of kingdom in constructor
     */
    constructor(name: string) {
        this._name = name;
        this._emblem = kingdomEmblemMap[this._name];
        this._characterMap = this.createCharacterMap();
    }

    /**
     * Get function for returning name
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Get function for returning emblem
     */
    public get emblem(): string {
        return this._emblem
    }

    /**
     * Get function for returning characterMap
     */
    public get characterMap(): IStringNumType {
        return this._characterMap;
    }

    /**
     * Method for decrypting message from other kingdoms
     * @param {string} message : encrypted message from other kingdom for ally formation
     * Return type will be boolean indicating decrypted or not
     */
    public decryptMessage(message: string): boolean {
        let isMatching = true;
        let charArr: string[] = Object.keys(this._characterMap);
        if (charArr.length > 0) {
            charArr.some((ele) => {
                let re = new RegExp(ele, "gi");
                if (this._characterMap[ele] > (message.toLowerCase().match(re) || []).length) {
                    isMatching = false;
                    return true;
                }
            });
            return isMatching;
        } else {
            return false;
        }
    }

    /**
     * Method for creating character map from emblem
     * Return type will be a object of key value pair
     */
    public createCharacterMap() {
        let map: IStringNumType = {};
        if (typeof (this._emblem) !== 'undefined') {
            let charArr = this._emblem.split('');
            charArr.forEach(ele => map[ele] = map[ele] ? map[ele] + 1 : 1);
        }
        return map;
    }
}