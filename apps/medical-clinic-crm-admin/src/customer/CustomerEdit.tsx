import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="lastName" source="lastName" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="phone" source="phone" />
        <DateTimeInput label="birthDate" source="birthDate" />
        <TextInput label="firstName" source="firstName" />
        <ReferenceArrayInput
          source="appointments"
          reference="Appointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
