import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import {Document} from 'mongoose';

@Schema()
export class MongoEvent extends Document {
  @Prop()
  type: string;

  @Prop({index: true})
  name: string;

  @Prop(mongoose.SchemaTypes.Mixed)
  payload: Record<string, any>
}

export const EventSchema = SchemaFactory.createForClass(MongoEvent);
EventSchema.index({name: 1, type: -1})