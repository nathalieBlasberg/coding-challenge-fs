import { Controller, Get, Param, UseInterceptors } from "@nestjs/common";
import { StarWarsService } from "./star-wars.service";
import { CacheInterceptor } from "@nestjs/cache-manager";

@UseInterceptors(CacheInterceptor)
@Controller("star-wars")
export class StarWarsController {
  constructor(private readonly starWarsService: StarWarsService) {}

  @Get("people/:page")
  getPeople(@Param("page") page: number) {
    return this.starWarsService.getPeople(page);
  }

  @Get("person/:id")
  getPerson(@Param("id") id: string) {
    return this.starWarsService.getPerson(id);
  }

  @Get("planet/:id")
  getPlanet(@Param("id") id: string) {
    return this.starWarsService.getPlanet(id);
  }
}
