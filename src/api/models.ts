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

export interface Service {
  name: string;
  resume: string;
  description?: string;
  activities?: string[];
  images: ServiceImage;
  steps?: string[];
  testimonials?: Testimony[];
}

export interface ServiceImage {
  card: string;
  banner?: string;
}

export interface Testimony {
  name: string;
  office: string;
  testimony: string
}