import styled from "styled-components"
import LogoImg from "../../assets/logo.png"

export const HeaderContainer = styled.header`
    width: 100%;
    height: 92px;
    background: transparent;

    filter: none;
`

export const Logo = styled.img.attrs(props => ({
    src: props.src || LogoImg 
}))`
    width: 190px;
    height: 75px;
    margin-left: 130px;

`