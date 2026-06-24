"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardService = void 0;
const luhn_validator_1 = require("../utils/luhn.validator");
class CardService {
    static validateCard(cardNumber) {
        const isValid = (0, luhn_validator_1.isValidLuhn)(cardNumber);
        const cardType = isValid ? (0, luhn_validator_1.getCardType)(cardNumber) : undefined;
        if (isValid) {
            return {
                valid: true,
                cardType,
                message: `Valid ${cardType ? cardType : ''} card number`.trim()
            };
        }
        else {
            return {
                valid: false,
                message: 'Invalid card number'
            };
        }
    }
}
exports.CardService = CardService;
