import { EntrarText, InputButtonCodeAcess, InputButtonEntrar, InputText, LoginFormContainer, RememberMeContainer, SubscribeContainer, TestContainer } from "./styles";

const LoginForm = () =>{
    return (
        <LoginFormContainer>
            <form>
                <EntrarText>Entrar</EntrarText>

                <InputText type="text" placeholder="Email ou número de celular"/>

                <InputText type="text" placeholder="Senha"/>

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
                

            </form>
        </LoginFormContainer>
    )
}

export default LoginForm;