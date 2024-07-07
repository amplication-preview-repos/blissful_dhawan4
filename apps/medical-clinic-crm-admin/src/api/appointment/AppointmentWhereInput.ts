import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AppointmentWhereInput = {
  appointmentDate?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
  doctor?: DoctorWhereUniqueInput;
  id?: StringFilter;
  reason?: StringNullableFilter;
};
