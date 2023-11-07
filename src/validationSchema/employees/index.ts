import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  position: yup.string().required(),
  salary: yup.number().integer().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  restaurant_id: yup.string().nullable().required(),
});
