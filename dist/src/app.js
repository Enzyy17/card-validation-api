"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const card_routes_1 = __importDefault(require("./routes/card.routes")); // ← Correct
const app = (0, express_1.default)();
const PORT = process.env.PORT || 7500;
app.get('/', (req, res) => {
    res.json("Welcome to card validation API");
});
//middlewares
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
//route
app.use('/api', card_routes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
