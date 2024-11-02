import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HttpModule } from "@nestjs/axios";
import { StarWarsController } from "./star-wars/star-wars.controller";
import { StarWarsService } from "./star-wars/star-wars.service";

@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: () => ({
        ttl: 5,
      }),
    }),
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [AppController, StarWarsController],
  providers: [AppService, StarWarsService],
})
export class AppModule {}
