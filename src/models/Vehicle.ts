import { FilmDto, VehicleDto } from "../types";
import { Displayable } from "./interfaces/Displayable";

export class Vehicle implements Displayable {
  dto: VehicleDto;

  constructor(vehicleDto: VehicleDto) {
    this.dto = vehicleDto;
  }

  get displayName(): string {
    return this.dto.name;
  }
}
