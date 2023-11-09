import * as yup from 'yup';

// const regexCartNumbers = /(?<!\d)\d{16}(?!\d)|(?<!\d[ _-])(?<!\d)\d{4}(?=([_ -]))(?:\1\d{4}){3}(?![_ -]?\d)/;
const regexPhone = /[+]994(40|5[015]|60|7[07])\d{7}/;

export const rentCarSchema = yup.object().shape({
    email: yup.string().email('Düzgün email daxil edin!').required("Email tələb olunur!"),
    cartNumbers: yup.string().required("Kart üzərindəki rəqəmləri daxil edin!"),
    fullName: yup.string().required("Ad və soyadınızı daxil edin!"),
    CVV: yup.string().required("CVV rəqəmlərini daxil edin."),
    usageDate: yup.string().required("İstifadə tarixini daxil edin!"),
    phone: yup.string().matches(regexPhone, 'Xaiş edirik düzgün nömrə daxil edin!').required("Telefon nömrəsi tələb olunur!"),
});

// .matches(regexCartNumbers, 'Rəqəmləri düzgün daxil edin!')