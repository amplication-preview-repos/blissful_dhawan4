import { Customer } from "../customer/Customer";
import { Doctor } from "../doctor/Doctor";

export type Appointment = {
  appointmentDate: Date | null;
  createdAt: Date;
  customer?: Customer | null;
  doctor?: Doctor | null;
  id: string;
  reason: string | null;
  updatedAt: Date;
};
