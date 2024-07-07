import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  appointmentDate?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  reason?: SortOrder;
  updatedAt?: SortOrder;
};
