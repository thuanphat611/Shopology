export const envConfig = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,

  database: {
    type: process.env.DATABASE_TYPE || 'postgres',
    url: process.env.DATABASE_CONNECTION_STRING,

    entities: [`${__dirname}/../**/*.entity.{js,ts}`],
    migrations: [`${__dirname}/../database/migrations/**/*{.ts,.js}`],

    logging: false,
    synchronize: false,
    autoLoadEntities: true,
    ssl: {
      rejectUnauthorized: false,
    },
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
