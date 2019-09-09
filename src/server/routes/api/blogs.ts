import * as express from 'express';
import db from '../../db';
import { RequestHandler } from 'express-serve-static-core';

const router = express.Router();

const isAdmin: RequestHandler = (req, res, next) => { //verifies role of user logging in
    if (!req.user || req.user.role !== 'admin') {
        console.log(req.user);
        return res.sendStatus(401);
    } else {
        return next();
    }
};

router.get('/', async (req, res, next) => {
    try {
        let blogs = await db.Blogs.getAll();
        res.json(blogs);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res, next) => {
    let id = req.params.id;
    try {
        let [blog] = await db.Blogs.getOneBlog(id);
        let [blogtags]: any = await db.blogtags.getBlogTags(id);
        res.json([blog, blogtags]);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.post('/', isAdmin, async (req, res) => {
    let newBlog = {
        title: req.body.title,
        content: req.body.content
    }
    let [result] = await db.blogs.post(newBlog);

    let newBlogtag = {
        blogid: result,
        tagid: req.body.selectedTag
    };
    await db.blogtags.insert(newBlogtag);
    res.json(result);

});

router.delete('/:id', isAdmin, async (req, res) => {
    try {
        await db.blogtags.remove(req.params.id);
        await db.blogs.remove(req.params.id);
        res.json('Blog post deleted.');
    } catch (error) {
        console.log(error);
        res.status(500).json('Something went wrong.');
    }
});

router.put('/:id', isAdmin, async (req, res) => {
    try {
        await db.blogs.edit(req.body, req.params.id);
        res.json('Blog edited successfully.');
    } catch (error) {
        console.log(error);
        res.status(500).json('Something went wrong with your PUT request in blogs.');
    }
});

export default router;