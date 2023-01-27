import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .required("Don't forget to put the password first")
    .oneOf(["admin1234"], "Wrong password"),
});

interface LoginFields {
  password: string;
}

interface FormikProps {
  onSubmit: (
    values: LoginFields,
    formikHelpers: FormikHelpers<LoginFields>
  ) => void;
}

export const useLoginFormik = ({ onSubmit }: FormikProps) => {
  return useFormik({
    initialValues: {
      password: "",
    },
    validateOnChange: false,
    validationSchema: LoginSchema,
    onSubmit,
  });
};
