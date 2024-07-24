import {IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCoffeeDto {
  @ApiProperty({description: 'The name of coffee'})
  @IsString()
  readonly name: string;
  @ApiProperty({description: 'The brand of coffee'})
  @IsString()
  readonly brand: string;
  @ApiProperty({example: []})
  @IsString({each: true})
  readonly flavours: string[];
}
