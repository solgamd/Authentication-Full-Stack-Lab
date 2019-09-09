import { knextion as knex } from '../index';
// import { Query } from '../index';

const find = (blogid: number) => knex('blogtags').select().where({ blogid });

const getBlogTags = (blogid: number) => knex.raw(`CALL spGetBlogTags(?)`, [blogid]);

const insert = (obj: { blogid?: number, tagid?: number}) => knex('blogtags').insert(obj);

const remove = (blogid: number) => knex('blogtags').delete().where({ blogid });

const edit = (blogid: number, tagid: number) => knex('blogtags').update({ tagid }).where({ blogid });


// ------- MySQL Queries converted to Knex above -----------
// const getBlogTags = (blogid: number) => Query('CALL spGetBlogTags(?)', [blogid]);

// const insert = (blogid: number, tagid: number) => Query('INSERT INTO blogtags (blogid, tagid) VALUE (?)', [[blogid, tagid]]); 

// const remove = (blogid: number) => Query('DELETE FROM blogtags WHERE blogid = ?', [blogid]);

// const edit = (blogid: number, tagid: number) => Query('UPDATE blogtags SET tagid = ? WHERE blogid = ?', [tagid, blogid]);


export default {
    find,
    getBlogTags,
    insert,
    remove, 
    edit
}