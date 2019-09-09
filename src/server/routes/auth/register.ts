import * as express from 'express';
import DB from '../../db';
import { HashPassword } from '../../utils/security/password';
import { CreateToken } from '../../utils/security/tokens';

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        let user = req.body;                            
        user.password = HashPassword(req.body.password); // User's password overridden with new hashed password
        let [result]: any = await DB.Users.insertUser(user.id, user.email, user.password);
        let token = await CreateToken({ userid: result.insertId });
        res.json({
            token,
            role: 'guest',
            userid: result.insertId
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;