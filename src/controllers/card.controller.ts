import { Request, Response } from 'express';
import { CardValidationRequest, CardValidationResponse } from '../types/card.types';
import { CardService } from '../services/card.services';
import { validationResult } from 'express-validator';

export class CardController {
  static async validate(req: Request<{}, {}, CardValidationRequest>, res: Response<CardValidationResponse>) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          valid: false,
          message: errors.array()[0].msg
        });
      }

      const { cardNumber } = req.body;
      const result = CardService.validateCard(cardNumber);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        valid: false,
        message: 'Internal server error'
      });
    }
  }
}