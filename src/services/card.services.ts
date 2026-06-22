import { isValidLuhn, getCardType } from '../utils/luhn.validator';
import { CardValidationResponse } from '../types/card.types';

export class CardService {
  static validateCard(cardNumber: string): CardValidationResponse {
    const isValid = isValidLuhn(cardNumber);
    const cardType = isValid ? getCardType(cardNumber) : undefined;

    if (isValid) {
      return {
        valid: true,
        cardType,
        message: `Valid ${cardType ? cardType : ''} card number`.trim()
      };
    } else {
      return {
        valid: false,
        message: 'Invalid card number'
      };
    }
  }
}