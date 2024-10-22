export declare const envConfig: () => {
    port: number;
    database: {
        type: string;
        host: string;
        port: number;
        database: string;
        username: string;
        password: string;
        entities: string[];
        migrations: string[];
        logging: boolean;
        synchronize: boolean;
        autoLoadEntities: boolean;
    };
    jwt: {
        secret: string;
        signOptions: {
            expiresIn: string | number;
        };
    };
};
