import * as YUP from 'yup'

export const validationSchema = YUP.object({
    name: YUP.string().min(2).required('Zəhmət olmasa adınızı Girin'),
    email: YUP.string().email('Zəhmət olmasa emailinizi daxil edin').required('Zəhmət olmasa emailinizi daxil edin'),
    number: YUP.string().matches(/^\d{12}$/, "Telefon Nomresi 12 reqemli olmalıdır").required('Zəhmət olmasa nömrənizi daxil edin'),
    topic: YUP.string().required('Zəhmət olmasa mövzunu daxil edin')
})


export const validationSchema2 = YUP.object({
    name: YUP.string().min(2).required('Zəhmət olmasa adınızı Girin'),
    email: YUP.string().email('Zəhmət olmasa emailinizi daxil edin').required('Zəhmət olmasa emailinizi daxil edin'),
    number: YUP.string().matches(/^\d{12}$/, "Telefon Nomresi 12 reqemli olmalıdır").required('Zəhmət olmasa nömrənizi daxil edin'),
    topic: YUP.string().required('Zəhmət olmasa mövzunu daxil edin')
})


