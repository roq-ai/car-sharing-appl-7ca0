import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  established_date: yup.date().nullable(),
  location: yup.string().nullable(),
  contact_email: yup.string().nullable(),
  contact_phone: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
