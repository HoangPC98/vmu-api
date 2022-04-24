declare const _default: () => {
    env: string;
    port: number;
    database: {
        type: string;
        username: string;
        password: string;
        database: string;
        host: string;
        port: number;
        logging: boolean;
    };
    jwtAuth: {
        access_token_ttl: string;
        jwt_token_secret: string;
        refresh_token_ttl: string;
    };
};
export default _default;
