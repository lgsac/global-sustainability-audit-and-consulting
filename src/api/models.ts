import { EXPERIENCE_TYPE } from "./enums";

export interface Hashmap<T> {
  [key: string]: T;
}

export interface Experience {
  period: Period;
  name: string,
  company: string,
  location?: string,
  type: EXPERIENCE_TYPE,
  activities: string[]
}


export interface Period {
  ingress: string;
  conclusion?: string;
}