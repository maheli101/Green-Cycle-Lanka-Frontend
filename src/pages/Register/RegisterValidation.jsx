import * as Yup from 'yup';

export const RegisterValidation = Yup.object({
  Name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Please enter name"),
  Email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter email"),
  Number: Yup.string()
    .matches(/^\d+$/, "Please enter a valid phone number")
    .min(10, "Phone number must be at least 10 digits")
    .required("Please check your number"),
  IDcard: Yup.string()
    .required("Please enter your NIC"),
  Pwd: Yup.string()
    .min(5, "Password must be at least 6 characters")
    .required("Please enter password"),
  CPwd: Yup.string()
    .oneOf([Yup.ref('Pwd'), null], "Password not match")
    .required("Please confirm your password"),
  Verify: Yup.string()
    .required("Please enter the verification number")
});
