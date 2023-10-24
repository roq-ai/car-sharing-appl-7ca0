import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  booking_status: yup.string().required(),
  total_price: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});
