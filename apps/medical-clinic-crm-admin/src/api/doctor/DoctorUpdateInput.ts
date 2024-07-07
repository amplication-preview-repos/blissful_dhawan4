import { AppointmentUpdateManyWithoutDoctorsInput } from "./AppointmentUpdateManyWithoutDoctorsInput";

export type DoctorUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  speciality?: string | null;
  email?: string | null;
  appointments?: AppointmentUpdateManyWithoutDoctorsInput;
};
