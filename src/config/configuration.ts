export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: 'mysql',
    username: process.env.DB_USER || 'vmu',
    password: process.env.DB_PASSWORD || 'vmu',
    database: process.env.DB_NAME || 'vmu',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    logging: process.env.DB_LOGGING ? true : false,
  },
  jwtAuth: {
    access_token_ttl: process.env.JWT_ACCESS_TOKEN_TTL || '15m',
    access_token_secret: process.env.JWT_ACCESS_TOKEN_SECRECT,
    refresh_token_ttl: process.env.JWT_REFRESH_TOKEN_TTL || '7d',
    refresh_token_secret: process.env.JWT_REFRESH_TOKEN_SECRET,
  },
});
