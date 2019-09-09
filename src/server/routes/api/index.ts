import * as express from 'express';
import * as passport from 'passport';
import blogsRouter from './blogs';
import tagsRouter from './tags';
import blogtagsRouter from './blogtags';
import donateRouter from './donate';
import contactRouter from './contact';

const router = express.Router();

router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if(user) req.user = user; //if user exists/token validates => get user response that's added on req.user
        return next();
    })(req, res, next);
});

router.use('/blogs', blogsRouter); //blogs will be displayed to user even if token (above) doesn't validate
router.use('/tags', tagsRouter);
router.use('/blogtags', blogtagsRouter)
router.use('/donate', donateRouter)
router.use('/contact', contactRouter)

export default router;