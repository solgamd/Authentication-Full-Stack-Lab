import { knextion as knex } from '../index';
// import { Query } from '../index';

const getTags = () => knex('tags').select();

// const getTags = () => Query('SELECT * FROM tags');

export default {
    getTags
}