import { Router } from 'express';
import db from '../../db';

const router = Router();

router.put('/:id', async (req, res) => {
    try {
        let exists: any = await db.blogtags.find(req.params.id);
        console.log(exists)
        if(exists.length !== 0) {
            await db.blogtags.edit(req.params.id, req.body.tagid);
        } else {
            await db.blogtags.insert({ blogid: req.params.id, tagid: req.body.tagid })
        }
        res.json('Blogtag edited successfully.')
    } catch (error) {
        console.log(error);
        res.status(500).json('Something went wrong with your PUT request in blogtags.')
    }
})
export default router;