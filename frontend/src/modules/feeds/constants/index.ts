import * as yup from "yup";

export const feedSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  author: yup.string(),
  link: yup.string().required(),
  imageUrl: yup.string(),
  date: yup.date(),
}).required();
