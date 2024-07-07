import { Appointment } from "../appointment/Appointment";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  birthDate: Date | null;
  firstName: string | null;
  appointments?: Array<Appointment>;
};
