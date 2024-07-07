import { Appointment } from "../appointment/Appointment";

export type Doctor = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  speciality: string | null;
  email: string | null;
  appointments?: Array<Appointment>;
};
