
export interface Property {
  id: string;
  title: string;
  location: string;
  type: string;
  image: string;
  description: string;
  size?: string;
}

export interface Premise extends Property {
  availableDate: string;
}

export enum Page {
  Home = 'hem',
  About = 'om-oss',
  Properties = 'fastigheter',
  Projects = 'projektutveckling',
  Available = 'lediga-lokaler'
}
