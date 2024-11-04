import { StarshipDto } from "../types";
import { Displayable } from "./interfaces/Displayable";

export class Starship implements Displayable {
  dto: StarshipDto;

  constructor(starshipDto: StarshipDto) {
    this.dto = starshipDto;
  }

  get displayName(): string {
    return this.dto.name;
  }
}
