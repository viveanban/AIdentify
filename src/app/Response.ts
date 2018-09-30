import {Prediction} from "./Prediction";

export class Response{
  id: string;
  project: string;
  iteration: string;
  created: string;
  predictions: Prediction[];
}
