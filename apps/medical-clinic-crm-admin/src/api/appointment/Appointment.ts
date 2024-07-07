import { Doctor } from "../doctor/Doctor";
import { Customer } from "../customer/Customer";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  appointmentDate: Date | null;
  reason: string | null;
  doctor?: Doctor | null;
  customer?: Customer | null;
};
