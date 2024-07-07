import { Appointment } from "../appointment/Appointment";

export type Customer = {
  appointments?: Array<Appointment>;
  birthDate: Date | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
};
