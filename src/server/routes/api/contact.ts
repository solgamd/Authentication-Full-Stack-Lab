import * as express from 'express';
import * as mailgunLoader from 'mailgun-js';
import config from '../../config';

const router = express.Router();

let mailgun = mailgunLoader({
    apiKey: config.apiKeys.mailgunApi,
    domain: config.apiKeys.mailgunDomain
});

const sendEmail = (to: string, from: string, subject: string, message: string) => {
    let data = {
        to,
        from,
        subject,
        text: message 
    };
    return mailgun.messages().send(data);
};

router.post('/', async (req, res, next) => {
    try {
        await sendEmail('megandsolga@gmail.com', req.body.email, req.body.subject, req.body.message);
        res.send('Email sent!');
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

export default router;