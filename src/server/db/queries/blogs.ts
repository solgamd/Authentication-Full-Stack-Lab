import { knextion as knex } from '../index';
// import { Query } from 'mysql';

const getAll = () => knex('blogs').select();

const getOneBlog = (id: number) => knex('blogs').select().where({ id });

const post = (obj: { title: string, content: string }) => knex('blogs').insert(obj);

const edit = (obj: { title?: string, content?: string }, id: number) => knex('blogs').update(obj).where({ id });

const remove = (id: number) => knex('blogs').delete().where({ id });


// ------- MySQL Queries converted to Knex above -----------
// const getAll = async () => Query('SELECT * from blogs');

// const getOneBlog = async (id: number) => Query('SELECT * from blogs WHERE id = ?', [id]);

// const post = async (title: string, content: string) => Query('INSERT INTO blogs (title, content) VALUES (?)', [[title, content]]);

// const edit = async (id: number, title: string, content: string) => Query('UPDATE blogs SET title = ?, content = ? WHERE id = ?', [title, content, id])

// const remove = async (id: number) => Query('DELETE FROM blogs WHERE id = ?', [id]);

export default {
    getAll,
    getOneBlog,
    post,
    edit,
    remove
}

