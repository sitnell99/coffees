import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingService } from './coffee-rating/coffee-rating.service';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import appConfig from './config/app.config';
import { CommonModule } from './common/common.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CoffeesMongoModule } from './coffees-mongo/coffees-mongo.module';

// @Module({
//   imports: [
//     TypeOrmModule.forRootAsync({
//      useFactory: () => ({
//        type: 'postgres',
//        host: process.env.DATABASE_HOST,
//        port: +process.env.DATABASE_PORT,
//        username: process.env.DATABASE_USER,
//        password: process.env.DATABASE_PASSWORD,
//        database: process.env.DATABASE_NAME,
//        autoLoadEntities: true,
//        synchronize: true
//      })
//     }),
//     ConfigModule.forRoot({
//       load: [appConfig],
//       validationSchema: Joi.object({
//         DATABASE_HOST: Joi.required(),
//         DATABASE_PORT: Joi.number().default(5432)
//       })
//     }),
//     CoffeesModule,
//     CoffeeRatingModule,
//     CoffeeRatingModule,
//     DatabaseModule,
//     CommonModule
//   ],
//   controllers: [AppController],
//   providers: [
//     AppService,
//     CoffeeRatingService
//   ],
// })
//
//For Mongo DB
@Module({
  imports: [
    CoffeesMongoModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-course'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
