import styled from "styled-components";
import "@fontsource/roboto"

export const LoginFormContainer = styled.div`
    display: flex;
    justify-content: center;
    font-family: "Roboto", sans-serif;

    form{
        height: 541px;
        width: 460px;
        background: black;
        padding: 48px 68px;

        p{
            color: #FFFFFF;
            font-size: 16px;
            margin-bottom: 20px;
            text-align: center;
        }

        a{
            text-decoration: none;
            color: #FFFFFF;
            margin-bottom: 20px;
            text-align: center;
        }

    }
`

export const EntrarText = styled.h1`
    color: white;
    margin-bottom: 25px;

`

export const InputText = styled.input`
    width: 100%;
    height: 60px;
    border-radius: 5px;
    padding: 24px 16px 24px 16px;
    background: transparent;
    border: 1px solid #333333;
    margin-bottom: 15px;
    font-size: 16px;
`

export const InputButtonEntrar = styled.button`
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: none;
    background: #C11119;
    color: #FFFFFF;
    font-size: 16px;
    margin-bottom: 20px;
`

export const InputButtonCodeAcess = styled.button`
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: none;
    background: #808080;
    color: #FFFFFF;
    font-size: 16px;
    margin-bottom: 20px;
`

export const ForgotPasswordAnchor = styled.a`
    text-decoration: none;
    color: #FFFFFF;
`

export const TestContainer = styled.div`
    text-align: center;
`

export const RememberMeContainer = styled.div`
    margin-top: 15px;
    color: #FFFFFF;

    span{
        margin-left: 12px;
        font-size: 16px;
    }

    input{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        width: 18px;
        height: 18px;

        border: 1px solid #333333;

        position: relative;
        top: 2.5px;

        border-radius: 1px;
    }
`

export const SubscribeContainer = styled.div`
    margin-top: 20px;
    
    .newText{
        color: rgba(255,255,255,0.7);
    }

    .subscribe{
        font-weight: 600;
        color: #FFFFFF;
        margin-left: 5px;
    }
`