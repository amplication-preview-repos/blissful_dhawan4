import { AppointmentUpdateManyWithoutDoctorsInput } from "./AppointmentUpdateManyWithoutDoctorsInput";

export type DoctorUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutDoctorsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  speciality?: string | null;
};
