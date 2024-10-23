import { EntrarText, InputButtonCodeAcess, InputButtonEntrar, InputContainer, InputText, LearnMoreContainer, LoginFormContainer, RememberMeContainer, SubscribeContainer, TestContainer } from "./styles";
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { VscError } from "react-icons/vsc";

const LoginForm = () =>{

    const schema = yup
        .object({
            emailOrCelphoneNumber: yup.string()
                .required("This field is required")
                .test('emailOrCelphoneNumber', 'Formato inválido', function(value) {
                    if (!value) return true;
        
                    const phoneRegExp = /^[0-9]{10,11}$/;
                    const isPhone = phoneRegExp.test(value.replace(/\D/g, ''));
                    const isEmail = yup.string().email().isValidSync(value);
        
                    if (isPhone) {
                        const numberOnly = value.replace(/\D/g, '');
                        // if (numberOnly.length < 10) {
                        //     return this.createError({
                        //         message: 'Telefone deve ter no mínimo 10 dígitos'
                        //     });
                        // }
                        if (numberOnly.length < 11) {
                            return this.createError({
                                message: 'Telefone deve ter 11 dígitos'
                            });
                        }
                    }
        
                    if (isEmail) {
                        if (!value.includes('@')) {
                            return this.createError({
                                message: 'Email deve conter @'
                            });
                        }
                    }
        
                    return isPhone || isEmail || this.createError({
                        message: 'Digite um email ou telefone válido'
                    });
                }),
            password: yup
                .string()
                .min(4, "A senha deve ter entre 4 e 60 caracteres.")
                .max(60, "A senha deve ter entre 4 e 60 caracteres.")
                .required("This field is required"),
        })
        .required();

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
        reValidateMode: "onChange"
    });

    const onSubmit = async (formData) =>{

        console.log(formData);
    }

    return (
        <LoginFormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <EntrarText>Entrar</EntrarText>

                <InputContainer>
                    <InputText {...register('emailOrCelphoneNumber')} type="text" placeholder="Email ou número de celular"/>
                    {errors?.emailOrCelphoneNumber?.message ? (
                        <span className="errorEmailCelphone">
                            {<VscError size={18} className="errorIcon"/>}
                            {errors?.emailOrCelphoneNumber?.message}
                        </span>
                    ) : null}
                </InputContainer>

                <InputContainer>
                    <InputText {...register('password')} type="password" placeholder="Senha"/>
                    {errors?.password?.message ? (
                        <span className="errorPassword">
                            {<VscError className="errorIcon" size={18}/>}
                            {errors?.password?.message}
                        </span>
                    ) : null}
                </InputContainer>


                <InputButtonEntrar type="submit">Entrar</InputButtonEntrar>
                <p>OU</p>

                <InputButtonCodeAcess>Usar um código de acesso</InputButtonCodeAcess>

                <TestContainer>
                    <a href="google.com">Esqueceu a senha?</a><br/>
                </TestContainer>

                <RememberMeContainer>
                    <input type="radio"/><span>Lembre-se de mim</span>
                </RememberMeContainer>

                <SubscribeContainer>
                    <span className="newText">Novo por aqui?</span><a className="subscribe" href="google.com">Assine agora.</a>
                </SubscribeContainer>
                
                <LearnMoreContainer>
                    <span className="learnMoreText">Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.</span> <a className="learnMore" href="google.com">Saiba mais.</a>
                </LearnMoreContainer>

            </form>
        </LoginFormContainer>
    )
}

export default LoginForm;