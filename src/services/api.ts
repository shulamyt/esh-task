import axios from "axios";
import {
  FilmDto,
  PersonDto,
  PlanetDto,
  SpecieDto,
  StarshipDto,
  VehicleDto,
} from "../types";
import { Person } from "../models/Person";
import { Film } from "../models/Film";
import { Planet } from "../models/Planet";
import { Specie } from "../models/Specie";
import { Starship } from "../models/Starship";
import { Vehicle } from "../models/Vehicle";
import { Displayable } from "../models/interfaces/Displayable";

const API_URL = "https://swapi.dev/api";

const categories = [
  "people",
  "films",
  "planets",
  "species",
  "starships",
  "vehicles",
] as const;

export type Category = (typeof categories)[number];

export type Result = { category: Category; entities: Displayable[] };

export async function searchEntity<Model, Dto>(
  query: string,
  endpoint: Category,
  ModelClass: new (dto: Dto) => Model
): Promise<Model[]> {
  const response = await axios.get<{ results: Dto[] }>(
    `${API_URL}/${endpoint}?search=${query}`
  );
  const dtoArrays = response.data.results;
  if (!Array.isArray(dtoArrays)) {
    throw new Error("Expected an array of dto objects");
  }
  return dtoArrays.map((personDto) => {
    return new ModelClass(personDto);
  });
}

export async function searchPeople(query: string) {
  return searchEntity<Person, PersonDto>(query, "people", Person);
}

export async function searchFilms(query: string) {
  return searchEntity<Film, FilmDto>(query, "films", Film);
}

export async function searchPlanets(query: string) {
  return searchEntity<Planet, PlanetDto>(query, "planets", Planet);
}

export async function searchSpecies(query: string) {
  return searchEntity<Specie, SpecieDto>(query, "species", Specie);
}

export async function searchStarships(query: string) {
  return searchEntity<Starship, StarshipDto>(query, "starships", Starship);
}

export async function searchVehicles(query: string) {
  return searchEntity<Vehicle, VehicleDto>(query, "vehicles", Vehicle);
}

const searchFunctions: Record<
  Category,
  (query: string) => Promise<Displayable[]>
> = {
  people: searchPeople,
  films: searchFilms,
  planets: searchPlanets,
  species: searchSpecies,
  starships: searchStarships,
  vehicles: searchVehicles,
};

export async function searchEntities(query: string): Promise<Result[]> {
  const promises = categories.map((endpoint) => {
    const searchFunction = searchFunctions[endpoint];
    if (!searchFunction) {
      throw new Error(`searchFunction for ${endpoint} in missing`);
    }
    return searchFunction(query);
  });
  const responses = await Promise.all(promises);

  return responses.map((entities, index) => ({
    category: categories[index],
    entities,
  }));
}
