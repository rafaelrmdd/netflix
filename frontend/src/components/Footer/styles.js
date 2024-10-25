import styled from "styled-components";

export const FooterContainer = styled.footer`
    height: 240px;
    width: 80%;
    background: transparent;
    color: #FFFFFFB3;
    padding: 0px 32px;

    margin: 75px 135px 0px 135px; 

`

export const NavigationItemsContainer = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    a{
        color: #FFFFFFB3;
        width: 23%;
    }


`

export const TopRow = styled.div`
    height: 40px;
    width: 100%;

    display: flex;
    justify-content: space-between;

`

export const BottomRow = styled.div`
    height: 40px;
    width: 100%;

    display: flex;
    gap: 30px;
`

export const SelectContainer = styled.div`
 
    width: 142px;
    min-height: 1px;
    border: 1px solid #333333;
    border-radius: 5px;
    padding: 5px;   
    margin-top: 5px; 

    select{
        background: transparent;
        color: #FFFFFF;
        border: none;
        font-size: 16px;
        margin-left: 2px;
    }

    svg{
        position: relative;
        margin-left: 5px;
        font-size: 16px;
        bottom: -1.5px;
        
    }
`