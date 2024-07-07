import * as graphql from "@nestjs/graphql";
import { AppointmentDto } from "../widgets/AppointmentDto";
import { WidgetsService } from "./widgets.service";

export class WidgetsResolver {
  constructor(protected readonly service: WidgetsService) {}

  @graphql.Query(() => [AppointmentDto])
  async GetAllAppointments(
    @graphql.Args()
    args: string
  ): Promise<AppointmentDto[]> {
    return this.service.GetAllAppointments(args);
  }

  @graphql.Query(() => AppointmentDto)
  async GetAppointmentById(
    @graphql.Args()
    args: string
  ): Promise<AppointmentDto> {
    return this.service.GetAppointmentById(args);
  }
}
