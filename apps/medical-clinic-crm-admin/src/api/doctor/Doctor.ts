import { Appointment } from "../appointment/Appointment";

export type Doctor = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  speciality: string | null;
  updatedAt: Date;
};
