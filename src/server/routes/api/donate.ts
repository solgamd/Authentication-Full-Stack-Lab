import * as express from 'express';
import * as stripeLoader from 'stripe';
import config from '../../config'

const router = express.Router();

const stripe = new stripeLoader(config.apiKeys.stripe); //Mailgun secret key

const charge = (token: string, amount: number) => {
    return stripe.charges.create({
        amount: amount * 100,
        currency: 'usd',
        source: token,
        description: 'Statement Description'
    });
}
router.post('/', async (req, res, next) => {
    try {
        let data = await charge(req.body.token.id, req.body.amount);
        res.send('Charge successful!');
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});


export default router;