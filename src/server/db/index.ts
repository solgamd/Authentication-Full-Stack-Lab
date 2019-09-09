import * as knex from 'knex';
// import * as mysql from 'mysql';
import config from '../config';

export const knextion = knex(config.knex); 


// export const pool = mysql.createPool(config.knex.connection);

// export const Query = (query: string, values?: any) => {
//     return new Promise<Array<any>>((resolve, reject) => {
//         pool.query(query, values, (err, results) => {
//             if(err) reject(err);
//             return resolve(results);
//         });
//     });
// };

import Blogs from './queries/blogs';
import Users from './queries/users';
import Tokens from './queries/tokens';
import blogs from './queries/blogs';
import blogtags from './queries/blogtags';
import tags from './queries/tags';

export default {
    Blogs,
    Users,
    Tokens,
    blogs,
    blogtags,
    tags
}