import { stripe } from './index'
import Stripe from 'stripe'

// Create a checkout session using line items
export const createStripeCheckoutSession = async (
    line_items : Stripe.Checkout.SessionCreateParams.LineItem[]
) => {
    const url = process.env.WEBAPP_URL

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url:`${url}/failed`
    })
    // Example Item:
    // name: 'T shirt',
    // description: 'Comfortable cotton t shirt'
    // images: ['url to image']
    // amount: 500
    // currency: usd
    // quantity:1

    return session
}