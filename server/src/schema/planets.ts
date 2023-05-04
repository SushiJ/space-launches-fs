import { getModelForClass, prop } from "@typegoose/typegoose";

export class Planets {
  @prop({ required: true })
  public planet!: string;
}

export default getModelForClass(Planets);
