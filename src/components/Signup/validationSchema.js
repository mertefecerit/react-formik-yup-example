import * as yup from 'yup';

let schema = yup.object().shape({
    firstName: yup.string().required('Bu alan zorunludur.'),
    lastName: yup.string().required('Bu alan zorunludur.'),
    email: yup.string().email('Geçerli bir e-posta adresi giriniz.').required('Bu alan zorunludur.'),
    password: yup.string().min(6,'Minimum 6 karakter olabilir').required('Bu alan zorunludur.'),
    rePassword: yup.string().oneOf([yup.ref('password')],'Parola alanları eşit değildir.').required('Bu alan zorunludur.')
})

export default schema;