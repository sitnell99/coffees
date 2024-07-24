import { Module } from '@nestjs/common';
import { CoffeesMongoController } from './coffees-mongo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Coffee, CoffeeSchema } from './entities/coffee.entity';
import { CoffeesMongoService } from './coffees-mongo.service';
import { EventSchema, MongoEvent } from '../events/entities/mongo-event.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Coffee.name,
        schema: CoffeeSchema,
      },
      {
        name: MongoEvent.name,
        schema: EventSchema,
      }
    ])
  ],
  controllers: [CoffeesMongoController],
  providers: [CoffeesMongoService],
})
export class CoffeesMongoModule {}
