import { AppointmentCreateNestedManyWithoutCustomersInput } from "./AppointmentCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  birthDate?: Date | null;
  firstName?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutCustomersInput;
};
