import { ManyToMany, Entity, PrimaryGeneratedColumn, Column, JoinTable } from 'typeorm';
import { Flavour } from './flavour.entity';

@Entity() // sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({nullable: true})
  description: string;

  @Column()
  brand: string;

  @Column({default: 0})
  recommendations: number;

  @JoinTable()
  @ManyToMany(
    type => Flavour,
      flavour => flavour.coffees,
    {
      cascade: true, // ['insert']
    }
  )
  flavours: Flavour[];
}