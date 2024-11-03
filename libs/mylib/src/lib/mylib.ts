import { z } from 'zod';

export interface Person {
  message: string;
  result: PersonResult;
}

export interface PersonResult {
  properties: {
    birth_year: string;
    eye_color: string;
    films: string[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    created: string;
    edited: string;
    species: string[];
    starships: string[];
    url: string;
    vehicles: string[];
  };
}

export interface Result {
  uid: string;
  name: string;
  url: string;
}

export interface People {
  message: string;
  next: null | string;
  previous: null | string;
  results?: Result[];
  result?: Result[];
  total_pages: number;
}

export interface Planet {
  message: string;
  result: PlanetResult;
}

export interface PlanetResult {
  properties: {
    climate: string;
    created: string;
    diameter: string;
    edited: string;
    films: string[];
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: string[];
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
  };
}
