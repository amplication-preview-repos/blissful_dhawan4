import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  appointmentDate?: SortOrder;
  reason?: SortOrder;
  doctorId?: SortOrder;
  customerId?: SortOrder;
};
