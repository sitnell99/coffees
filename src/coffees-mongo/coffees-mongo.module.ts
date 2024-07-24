import { Module } from '@nestjs/common';
import { CoffeesMongoController } from './coffees-mongo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Coffee, CoffeeSchema } from './entities/coffee.entity';
import { CoffeesMongoService } from './coffees-mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Coffee.name,
        schema: CoffeeSchema,
      }
    ])
  ],
  controllers: [CoffeesMongoController],
  providers: [CoffeesMongoService],
})
export class CoffeesMongoModule {}
