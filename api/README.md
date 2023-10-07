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
### Git Flow
```bash
$ git flow init -f
$ git flow feature start users-controller

$ git add -A
$ git commit -m "User controller"
$ git push
$ git flow feature finish
$ git status
```

#### Users controller
> Into src folder
```bash
$ nest generate module user
```
> into user folder
```bash
$ nest generate service user
$ nest generate controller user
```

### JWT
```bash
$ nest generate module auth
$ yarn add @nestjs/jwt
$ nest generate service auth/auth
$ yarn add bcrypt
```
