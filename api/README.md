### Step by step

```bash
$ yarn add @nestjs/config
$ yarn add @nestjs/typeorm typeorm mssql
```

#### Database configuration for mssql
> to avoid Self-certificate error with database add options section
```json
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: process.env.DATABASE_PASSWORD,
      database: 'blog',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      options: {
        trustServerCertificate: true,
      },
    }),
```
