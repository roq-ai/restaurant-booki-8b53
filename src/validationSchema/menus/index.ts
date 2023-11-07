import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().required(),
  availability_start_time: yup.date().required(),
  availability_end_time: yup.date().required(),
  restaurant_id: yup.string().nullable().required(),
});
