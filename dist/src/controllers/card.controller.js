"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardController = void 0;
const card_services_1 = require("../services/card.services");
const express_validator_1 = require("express-validator");
class CardController {
    static async validate(req, res) {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    valid: false,
                    message: errors.array()[0].msg
                });
            }
            const { cardNumber } = req.body;
            const result = card_services_1.CardService.validateCard(cardNumber);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({
                valid: false,
                message: 'Internal server error'
            });
        }
    }
}
exports.CardController = CardController;
