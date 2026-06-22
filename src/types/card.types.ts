export interface CardValidationRequest {
  cardNumber: string;
}

export interface CardValidationResponse {
  valid: boolean;
  cardType?: string;
  message?: string;
}

export interface ValidationError {
  message: string;
}