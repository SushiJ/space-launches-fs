import { ReturnModelType, getModelForClass, prop } from "@typegoose/typegoose";

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
  public destination!: string;

  @prop({ required: true, default: true })
  public success!: boolean;

  @prop({ required: true })
  public upcoming!: boolean;

  @prop({ type: () => [String], required: true })
  public customer!: Array<string>;
}

const launchesModel: ReturnModelType<typeof Launches> =
  getModelForClass(Launches);
export default launchesModel;
