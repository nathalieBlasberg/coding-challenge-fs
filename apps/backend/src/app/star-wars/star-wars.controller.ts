import { Controller, Get, Param, Query, UseInterceptors } from "@nestjs/common";
import { StarWarsService } from "./star-wars.service";
import { CacheInterceptor } from "@nestjs/cache-manager";

@UseInterceptors(CacheInterceptor)
@Controller("star-wars")
export class StarWarsController {
  constructor(private readonly starWarsService: StarWarsService) {}

  @Get("people")
  getPeople(@Query() query: Record<string, string>) {
    const search = query["search"] ?? "";
    const page = parseInt(query["page"]) ?? 0;

    return this.starWarsService.getPeople(search, page);
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
