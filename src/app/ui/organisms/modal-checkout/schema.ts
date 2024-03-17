import * as Yup from "yup";

export const schema = Yup.object().shape({
  cardholderName: Yup.string().required("Cardholder's name is required"),
  cardholderID: Yup.string().required("Cardholder ID is required"),
  numberOfPayments: Yup.string()
    .nullable()
    .required("Number of payments is required"),
});
