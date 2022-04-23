"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        type: 'mysql',
        username: process.env.DATABASE_USERNAME || 'eco',
        password: process.env.DATABASE_PASSWORD || 'eco',
        database: process.env.DATABASE_NAME || 'eco',
        host: process.env.DATABASE_HOST || 'localhost',
        port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
        logging: process.env.DATABASE_LOGGING ? true : false,
    },
    googleAuth: {
        authorizedDomain: process.env.GOOGLE_AUTHORIZED_DOMAIN || 'mirabo.com.vn',
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRECT,
    },
    jwtAuth: {
        access_token_ttl: process.env.JWT_ACCESS_TOKEN_TTL || '15m',
        access_token_secret: process.env.JWT_ACCESS_TOKEN_SECRECT,
        refresh_token_ttl: process.env.JWT_REFRESH_TOKEN_TTL || '7d',
        refresh_token_secret: process.env.JWT_REFRESH_TOKEN_SECRET,
    },
});
//# sourceMappingURL=configuration.js.map