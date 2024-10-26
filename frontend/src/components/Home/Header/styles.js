import styled from "styled-components";
import LogoImg from "../../../assets/logo.png"
import "@fontsource/roboto"

export const HeaderContainer = styled.header`
    height: 70px;
    width: 100%;
    background: #88F;
    padding: 0 53.953px 0 calc(53.953px - 15px);

    display: flex;

    color: #FFFFFF;
    font-family: "Roboto", sans-serif;

    a{
        text-decoration: none;
    }
`

export const NavigationItemsContainer = styled.nav`
    width: 535px;
    background: transparent;
    margin-left: 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    font-size: 15px;

    a{
        color: #E5E5E5;
    }

    .homeItem{
        color: rgb(255, 255, 255);
        font-weight: 600;
    }

    
`

export const UsefulItemsContainer = styled.div`
    width: 500px;
    background: blue;
    margin-left: auto;

    display: flex;
    align-items: center;
    justify-content: end;
    
`

export const Logo = styled.img.attrs(props => ({
    src: props.src || LogoImg 
}))`
    width: 120px;
    height: 50px;
    align-self: center;

`