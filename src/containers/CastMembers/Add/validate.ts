import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required(),
  type: yup.number().positive().integer().required(),
});