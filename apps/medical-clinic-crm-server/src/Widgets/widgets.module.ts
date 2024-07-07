import { Module } from "@nestjs/common";
import { WidgetsService } from "./widgets.service";
import { WidgetsController } from "./widgets.controller";
import { WidgetsResolver } from "./widgets.resolver";

@Module({
  controllers: [WidgetsController],
  providers: [WidgetsService, WidgetsResolver],
  exports: [WidgetsService],
})
export class WidgetsModule {}
