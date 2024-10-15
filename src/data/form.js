import * as Yup from "yup";
export const initialValues = {
  name: "",
  email: "",
  subject: "", // Add subject to the state
  message: "",
  captcha: "",
};
export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required."),
  email: Yup.string()
    .email("Invalid email address.")
    .required("Email is required."),
  subject: Yup.string().required("Subject is required."),
  message: Yup.string().required("Message is required."),
  captcha: Yup.string().required("Captcha is required."),
});
