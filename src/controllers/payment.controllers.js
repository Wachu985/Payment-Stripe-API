import Stripe from 'stripe';
import { APIKEY } from '../config.js';

const stripe = new Stripe(APIKEY)

export const createSesion = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: 'Data Packet',
                        description: 'Data Packet for Movistar'
                    },
                    currency: 'usd',
                    unit_amount: 150
                },
                quantity: 10
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'

    })
    return res.json(session)
}

export const successSesion = (req, res) => res.redirect('/success-payment.html')

export const calcelSession = (req, res) => res.redirect('/cancel-payment.html')