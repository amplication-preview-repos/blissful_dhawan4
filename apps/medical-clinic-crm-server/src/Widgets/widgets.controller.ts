import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { WidgetsService } from "./widgets.service";
import { AppointmentDto } from "../widgets/AppointmentDto";

@swagger.ApiTags("widgets")
@common.Controller("widgets")
export class WidgetsController {
  constructor(protected readonly service: WidgetsService) {}

  @common.Get("/appointments")
  @swagger.ApiOkResponse({
    type: AppointmentDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetAllAppointments(
    @common.Body()
    body: string
  ): Promise<AppointmentDto[]> {
        return this.service.GetAllAppointments(body);
      }

  @common.Get("/appointments/:id")
  @swagger.ApiOkResponse({
    type: AppointmentDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetAppointmentById(
    @common.Body()
    body: string
  ): Promise<AppointmentDto> {
        return this.service.GetAppointmentById(body);
      }
}
