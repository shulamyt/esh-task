import { PlanetDto } from "../types";
import { Displayable } from "./interfaces/Displayable";

export class Planet implements Displayable {
  dto: PlanetDto;

  constructor(planetDto: PlanetDto) {
    this.dto = planetDto;
  }

  get displayName(): string {
    return this.dto.name;
  }
}
