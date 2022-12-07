import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { prop } from "@typegoose/typegoose";

export interface ReviewModel extends Base {
}

export class ReviewModel extends TimeStamps {
  @prop()
  name: string;
  @prop()
  tittle: string;
  @prop()
  description: string;
  @prop()
  rating: number;
  @prop()
  createdAt: Date;
}
