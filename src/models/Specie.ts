import { SpecieDto } from "../types";
import { Displayable } from "./interfaces/Displayable";

export class Specie implements Displayable {
  dto: SpecieDto;

  constructor(specieDto: SpecieDto) {
    this.dto = specieDto;
  }

  get displayName(): string {
    return this.dto.name;
  }
}
