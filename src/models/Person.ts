import { PersonDto } from "../types";
import { Displayable } from "./interfaces/Displayable";

export class Person implements Displayable {
  dto: PersonDto;

  modelName: string = "person";

  constructor(personDto: PersonDto) {
    this.dto = personDto;
  }

  get displayName(): string {
    return this.dto.name;
  }

  get name(): string {
    return this.dto.name;
  }

  get height(): string {
    return this.dto.height;
  }

  get mass(): string {
    return this.dto.mass;
  }

  get gender(): string {
    return this.dto.gender;
  }
}

export function isPerson(obj: any): obj is Person {
  return (obj as Person).modelName === "person";
}
