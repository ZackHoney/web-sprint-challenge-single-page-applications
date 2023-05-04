import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required!')
        .min(2, ' name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'extra-large'], 'You must select a size!'),
        special: yup
        .string()
        .trim(),
    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    onions: yup.boolean(),
    bellpeppers: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    mushrooms: yup.boolean(),
   
})

export default formSchema;