import express, { Router } from 'express';
import { body } from 'express-validator';
import { CardController } from '../controllers/card.controller';

const router = Router();

router.post(
  '/validate-card',
  [
    body('cardNumber')
      .trim()
      .notEmpty().withMessage('Card number is required')
      .matches(/^[0-9\s-]{13,19}$/)
      .withMessage('Card number must contain only digits, spaces, or hyphens (13-19 characters)')
  ],
  CardController.validate
);

export default router;