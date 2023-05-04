import { getModelForClass, prop } from "@typegoose/typegoose";

export class Launches {
  @prop({ required: true, unique: true })
  public flightNumber!: number;

  @prop({ required: true })
  public launchDate!: Date;

  @prop({ required: true })
  public mission!: string;

  @prop({ required: true })
  public rocket!: string;

  @prop({ required: true })
  public target!: string;

  @prop({ required: true, default: true })
  public success!: string;

  @prop({ required: true })
  public upcoming!: string;

  @prop({ type: () => [String], required: true })
  public customers!: Array<string>;
}

export default getModelForClass(Launches);
