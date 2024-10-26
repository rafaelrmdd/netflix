import { HeaderContainer, NavigationItemsContainer, UsefulItemsContainer, Logo } from "./styles";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo/>
            <NavigationItemsContainer>
                <a href="google.com" className="homeItem">Home</a>
                <a href="google.com">TV Shows</a>
                <a href="google.com">Movies</a>
                <a href="google.com">New & Popular</a>
                <a href="google.com">My List</a>
                <a href="google.com">Browse by languages</a>

            </NavigationItemsContainer>
            <UsefulItemsContainer>
                Teste
                Teste
                Teste
                Teste
            </UsefulItemsContainer>
        </HeaderContainer>
    )
}

export default Header;