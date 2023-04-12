import * as yup from "yup"
const passwordRules =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const basicSchema = yup.object().shape({
    email:yup.string().email("Geçerli bir email giriniz").required("Email girmek zorunludur"),
    age:yup.number("Yaşınız Sayı olmalıdır").positive("Lütfen Pozitif bir yaş giriniz").integer("Lütfen yaşınızı tam sayı olarak giriniz").required("yaş girmek zorunludur"),
    password:yup.string().min(5,"Lütfen minimum 5 karakter giriniz").matches(passwordRules,
        {
            message:"Lütfen en az 1 büyük harf bir küçük harf ve 1 sayı giriniz"
        }).required("Şifre girmek zorunludur"),
    confirmPassword:yup.string().oneOf([yup.ref("password")],"Şifreler eşleşmiyor").required("Şifrenizi Onaylayınız"),

})