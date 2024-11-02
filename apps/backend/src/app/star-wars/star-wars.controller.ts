import { Controller, Get, Param, UseInterceptors } from "@nestjs/common";
import { StarWarsService } from "./star-wars.service";
import { CacheInterceptor } from "@nestjs/cache-manager";

@UseInterceptors(CacheInterceptor)
@Controller("star-wars")
export class StarWarsController {
  constructor(private readonly starWarsService: StarWarsService) {}

  @Get("people")
  getPeople() {
    return this.starWarsService.getPeople();
  }

  @Get("people/:id")
  getPerson(@Param("id") id: string) {
    return this.starWarsService.getPerson(id);
  }

  @Get("planets/:id")
  getPlanet(@Param("id") id: string) {
    return this.starWarsService.getPlanet(id);
  }
}
