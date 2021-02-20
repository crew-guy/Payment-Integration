"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStripeCheckoutSession = void 0;
const index_1 = require("./index");
// Create a checkout session using line items
exports.createStripeCheckoutSession = async (line_items) => {
    const url = process.env.WEBAPP_URL;
    const session = await index_1.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/failed`
    });
    // Example Item:
    // name: 'T shirt',
    // description: 'Comfortable cotton t shirt'
    // images: ['url to image']
    // amount: 500
    // currency: usd
    // quantity:1
    return session;
};
//# sourceMappingURL=checkout.js.map