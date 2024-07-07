import { Injectable } from "@nestjs/common";
import { AppointmentDto } from "../widgets/AppointmentDto";

@Injectable()
export class WidgetsService {
  constructor() {}
  async GetAllAppointments(args: string): Promise<AppointmentDto[]> {
    throw new Error("Not implemented");
  }
  async GetAppointmentById(args: string): Promise<AppointmentDto> {
    throw new Error("Not implemented");
  }
}
