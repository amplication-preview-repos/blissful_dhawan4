import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AppointmentWhereInput = {
  id?: StringFilter;
  appointmentDate?: DateTimeNullableFilter;
  reason?: StringNullableFilter;
  doctor?: DoctorWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
};
