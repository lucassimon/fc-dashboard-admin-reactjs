import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  is_active: yup.boolean()
});