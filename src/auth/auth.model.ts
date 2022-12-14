import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { prop } from "@typegoose/typegoose";

export interface AuthModel extends Base {}

export class AuthModel extends TimeStamps {
  @prop({ index: true })
  email: string;
  @prop()
  passwordHash: string;
}
