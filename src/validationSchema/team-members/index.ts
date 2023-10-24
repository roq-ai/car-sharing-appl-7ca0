import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  position: yup.string().required(),
  joined_date: yup.date().required(),
  salary: yup.number().integer().required(),
  work_hours: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
