import { BottomRow, FooterContainer, NavigationItemsContainer, SelectContainer, TopRow } from "./styles";
import { IoLanguage } from "react-icons/io5";

const Footer = () => {
    return(
        <FooterContainer>
            <p>Duvidas? Ligue 0800 591 2876</p>

            <NavigationItemsContainer>
                <TopRow>
                    <a href="google.com">Perguntas frequentes</a>
                    <a href="google.com">Central de ajuda</a>
                    <a href="google.com">Termos de uso</a>
                    <a href="google.com">Privacidade</a>
                </TopRow>

                <BottomRow>
                    <a href="google.com">Preferências de cookies</a>
                    <a href="google.com">Informações corporativas</a>
                </BottomRow>
            </NavigationItemsContainer>
            <SelectContainer>
                <IoLanguage/>
                <select>
                    <option>Português</option>
                    <option>English</option>
                </select>
            </SelectContainer>


        </FooterContainer>
    )
}

export default Footer;