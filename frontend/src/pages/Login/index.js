import Footer from "../../components/Footer";
import Header from "../../components/Header"
import LoginForm from "../../components/LoginForm";
import { Body, LoginPageContainer, NormalBrightness } from "./styles";

const Login = () => {
    return(
    <LoginPageContainer>
        <Header/>
        <LoginForm/>
        <Footer/>
    </LoginPageContainer>
    )
}

export default Login;