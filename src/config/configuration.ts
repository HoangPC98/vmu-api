export default () => ({
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3002,
  database: {
    type: 'postgres',
    username: process.env.POSTGRES_USER || 'vmu_user',
    password: process.env.POSTGRES_PASSWORD || 'vmu_pass',
    database: process.env.POSTGRES_NAME || 'vmu_db',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    logging: process.env.DB_LOGGING ? true : false,
  },
  jwtAuth: {
    access_token_ttl: process.env.JWT_ACCESS_TOKEN_TTL || '1d',
    jwt_token_secret: process.env.JWT_TOKEN_SECRET || 'vmu_secret',
    refresh_token_ttl: process.env.JWT_REFRESH_TOKEN_TTL || '7d',
  },
});
