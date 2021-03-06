export default {
    knex: {
        client: process.env.KNEX_CLIENT,
        connection: {
            user: process.env.KNEX_USER,
            password: process.env.KNEX_PASS,
            host: process.env.KNEX_HOST,
            database: process.env.KNEX_SCHEMA
        }
    },
    
    auth: {
        secret: process.env.SECRET
    },

    apiKeys: {
        stripe: process.env.STRIPE,
        mailgunApi: process.env.MAILGUN_API,
        mailgunDomain: process.env.MAILGUN_DOMAIN
    }
}