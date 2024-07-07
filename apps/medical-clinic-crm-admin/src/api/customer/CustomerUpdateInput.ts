import { AppointmentUpdateManyWithoutCustomersInput } from "./AppointmentUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutCustomersInput;
  birthDate?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
