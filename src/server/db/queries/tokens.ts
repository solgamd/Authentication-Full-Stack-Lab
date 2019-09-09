import { knextion as knex } from '../index';
// import { Query } from '../index';

const findOne = async (id: number, token: string) => knex('tokens').select().where({ id, token });

const insert = async (userid: number) => knex('tokens').insert({ userid });

const update = (id: number, token: string) => knex('tokens').update({ token }).where({ id });


// ------- MySQL Queries converted to Knex above -----------
// const findOne = async (id: number, token: string) => Query('SELECT * FROM tokens WHERE id = ? AND token = ?', [id, token]);

// const insert = async (userid: number) => Query('INSERT INTO tokens (userid) VALUES (?)', [userid]);

// const update = async (id: number, token: string) => Query('UPDATE tokens SET token = ? WHERE id = ?', [token, id]);

export default {
    findOne,
    insert,
    update
}