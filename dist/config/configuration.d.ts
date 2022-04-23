declare const _default: () => {
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
    googleAuth: {
        authorizedDomain: string;
        clientId: string;
        clientSecret: string;
    };
    jwtAuth: {
        access_token_ttl: string;
        access_token_secret: string;
        refresh_token_ttl: string;
        refresh_token_secret: string;
    };
};
export default _default;
