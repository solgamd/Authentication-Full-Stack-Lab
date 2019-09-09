import { knextion as knex } from '../index';
// import { Query } from '../index';

const findOneByEmail = async (email: string) => knex('users').select().limit(1).where({ email });

const findOneById = async (id: number) => knex('users').select().limit(1).where({ id });

const insertUser = async (id: number, email: string, password: string) => knex('users').insert({ email, password }).where({ id });


// ------- MySQL Queries converted to Knex above -----------
// const findOneByEmail = async (email: string) => Query('SELECT * FROM users WHERE email = ? LIMIT 1', [email]);

// const findOneById = async (id: number) => Query('SELECT * FROM users WHERE id = ? LIMIT 1', [id])

// const insertUser = async (id: number, email: string, password: string) => Query('INSERT INTO users (id, email, password) VALUES (?)', [id, email, password]);

export default {
    findOneByEmail,
    findOneById,
    insertUser
}