import { Injectable, Module, Scope } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavour } from './entities/flavour.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}

@Injectable()
export class CoffeeBrandFactory {
  create() {
    // some logic
    return ['buddy brew', 'nescafe']
  }
}

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavour, Event]),
    ConfigModule.forFeature(coffeesConfig)
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFEE_BRANDS,
      useFactory: () => ['buddy brew', 'nescafe'],
      scope: Scope.TRANSIENT
    }
    //CoffeeBrandFactory,
    // {
    //   provide: ConfigService,
    //   useClass: process.env.NODE_ENV === 'development'
    //     ? DevelopmentConfigService
    //     : ProductionConfigService
    // },
    // {
    //   provide: COFFEE_BRANDS,
    //   useFactory: async (connection: Connection): Promise<string[]> => {
    //     // const coffeeBrands = await connection.query('SELECT * ...')
    //     const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
    //     console.log('[!] Async Factory')
    //     return coffeeBrands;
    //   },
    //   inject: [Connection]
    // }
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
