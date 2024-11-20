export const envConfig = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,

  database: {
    type: process.env.DATABASE_TYPE || 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,

    entities: [`${__dirname}/../**/*.entity.{js,ts}`],
    migrations: [`${__dirname}/../database/migrations/**/*{.ts,.js}`],

    logging: false,
    synchronize: false,
    autoLoadEntities: true,
  },

  jwt: {
    access: {
      secret: process.env.JWT_SECRET || 'SECRET',
      signOptions: {
        expiresIn: Number(process.env.JWT_EXPIRATION_TIME) || '30m',
      },
    },
    refresh: {
      secret: process.env.JWT_REFRESH_SECRET || 'REFRESH_SECRET',
      signOptions: {
        expiresIn: Number(process.env.JWT_REFRESH_EXPIRATION_TIME) || '30d',
      },
    },
  },
});
