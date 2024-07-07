import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";

export type AppointmentUpdateInput = {
  appointmentDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  doctor?: DoctorWhereUniqueInput | null;
  reason?: string | null;
};
