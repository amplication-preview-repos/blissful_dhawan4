import { AppointmentCreateNestedManyWithoutCustomersInput } from "./AppointmentCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutCustomersInput;
  birthDate?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
