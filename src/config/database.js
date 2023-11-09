module.exports = {
    development: {
      username: process.env.DEV_DATABASE_USERNAME,
      password: process.env.DEV_DATABASE_PASSWORD,
      database: process.env.DEV_DATABASE_NAME,
      host: process.env.DEV_DATABASE_HOST,
      dialect: process.env.DEV_DATABASE_DIALECT,
      port: process.env.DEV_DATABASE_PORT,
    },
    production: {
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      dialect: process.env.DATABASE_DIALECT,
      port: process.env.DATABASE_PORT,
    },
  };