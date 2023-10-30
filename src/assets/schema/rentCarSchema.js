import * as yup from 'yup';

const regexPhone = /(?<!\d)\d{16}(?!\d)|(?<!\d[ _-])(?<!\d)\d{4}(?=([_ -]))(?:\1\d{4}){3}(?![_ -]?\d)/gmx;

export const contactSchema = yup.object().shape({
    email: yup.string().email('Xaiş edirik düzgün nömrə daxil edin!').required("Email tələb olunur!"),
    phone: yup.string().matches(regexPhone, 'Xaiş edirik düzgün nömrə daxil edin!').required("Telefon nömrəsi tələb olunur!"),
    name: yup.string().required("Ad və soyadınızı daxil edin!"),
    address: yup.string().required("Ünvanınızı daxil edin!"),
    type: yup.string().required("Müraciətin növü tələb olunur!"),
    subject: yup.string().required("Müraciətin mövzusu tələb olunur!"),
    message: yup.string().required("Mesajınızı daxil edin!"),
});