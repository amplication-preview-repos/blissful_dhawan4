import { AppointmentCreateNestedManyWithoutDoctorsInput } from "./AppointmentCreateNestedManyWithoutDoctorsInput";

export type DoctorCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  speciality?: string | null;
  email?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutDoctorsInput;
};
