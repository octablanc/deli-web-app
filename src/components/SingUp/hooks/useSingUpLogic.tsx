import { useState } from "react";
import { User, UserErrors } from "../../../interfaces";
import { CustomInputProps } from "../components/interfaces";
import validator from 'validator';
import { isCountry } from "./utils/ValidateCountry";
import { APIConnection } from "../../../services";

const userInitialValues: User = {
    mail: '',
    full_name: '',
    age: '',
    user_name: '',
    country: ''
};

const userErrorInitialValues: UserErrors = {
    email: true,
    full_name: true,
    age: true,
    user_name: true,
    country: true
}

export function useSingUpLogic() {
    const [user, setUser] = useState<User>(userInitialValues);
    const [userError, setUserError] = useState<UserErrors>(userErrorInitialValues);
    const [loading, setLoading] = useState<boolean>(false);

    const fields: CustomInputProps[] = [
        {
            span: 'Mail',
            value: user.mail,
            onChange: (mail: string) => setUser({ ...user, mail }),
            validation: (email: string) => !validator.isEmail(email),
            errorMessage: 'ingrese un mail válido',
            getError: (error: boolean) => setUserError({ ...userError, email: error })
        },
        {
            span: 'Nombre completo',
            value: user.full_name,
            onChange: (full_name: string) => setUser({ ...user, full_name }),
            validation: (full_name: string) => !(validator.isAlpha(full_name.replace(/\s/g, '')) && (full_name.length>=4 && full_name.length<=25)),
            errorMessage: 'ingrese un nombre válido entre 4 y 25 carácteres',
            getError: (error: boolean) => setUserError({ ...userError, full_name: error })
        },
        {
            span: 'Edad',
            value: user.age.toString(),
            onChange: (age: string) => setUser({ ...user, age: age }),
            validation: (age:string)=> !(+age>=1 && +age<=100),
            errorMessage: 'ingrese una edad válida en 1 y 100',
            getError: (error: boolean) => setUserError({ ...userError, age: error })
        },
        {
            span: 'Nombre de usuario',
            value: user.user_name,
            onChange: (user_name: string) => setUser({ ...user, user_name }),
            validation: (user_name: string) => !(user_name.length >=4 && user_name.length <= 10),
            errorMessage: 'ingrese un nombre de usuario entre 4 y 10 carácteres',
            getError: (error: boolean) => setUserError({ ...userError, user_name: error })
        },
        {
            span: 'País',
            value: user.country,
            onChange: (country: string) => setUser({ ...user, country }),
            validation: (country: string) => !isCountry(country) || country.length === 0,
            errorMessage: 'ingrese un país correcto',
            getError: (error: boolean) => setUserError({ ...userError, country: error })
        }
    ];
    
    const onSumbit = ()=>{
        if(Object.values(userError).includes(true))
            window.alert('Completa los campos correctamente!');
        else{
            setLoading(true);
            APIConnection.createUser(user)
                .then(()=> {
                    setUser(userInitialValues);
                    window.alert('Usuario creado correctamente!');
                })
                .catch(({response})=> window.alert(response.data.message))
                .finally(()=> setLoading(false));
        }
    }

    return { fields, disableSumbitButton: Object.values(userError).includes(true),  onSumbit, loading };
}