import Header from "../../components/Header"
import LoginForm from "../../components/LoginForm";
import { LoginPageContainer, NormalBrightness } from "./styles";

const Login = () => {
    return(
        <LoginPageContainer>
            <Header/>
            <LoginForm/>
        </LoginPageContainer>

    )
}

export default Login;