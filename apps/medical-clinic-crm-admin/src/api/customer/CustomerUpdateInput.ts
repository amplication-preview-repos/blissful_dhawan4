import { AppointmentUpdateManyWithoutCustomersInput } from "./AppointmentUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  birthDate?: Date | null;
  firstName?: string | null;
  appointments?: AppointmentUpdateManyWithoutCustomersInput;
};
