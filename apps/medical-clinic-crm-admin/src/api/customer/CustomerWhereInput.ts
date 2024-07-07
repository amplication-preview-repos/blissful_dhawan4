import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  phone?: StringNullableFilter;
  birthDate?: DateTimeNullableFilter;
  firstName?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
};
