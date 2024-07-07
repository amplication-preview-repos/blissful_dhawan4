import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AppointmentCreateInput = {
  appointmentDate?: Date | null;
  reason?: string | null;
  doctor?: DoctorWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
};
