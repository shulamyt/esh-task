import { FilmDto } from "../types";
import { Displayable } from "./interfaces/Displayable";

export class Film implements Displayable {
  dto: FilmDto;

  constructor(filmDto: FilmDto) {
    this.dto = filmDto;
  }

  get displayName(): string {
    return this.dto.title;
  }
}
