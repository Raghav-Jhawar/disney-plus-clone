import React from 'react';
import styled from "styled-components";

function Login() {
    return (
        <Container>
            <Content>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus, cupiditate accusamus id distinctio nemo eaque, voluptatibus fuga itaque optio libero assumenda officiis. Consectetur, tempora dolorem voluptatibus non odio pushiya.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png"/>
            </Content>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    position:relative;
    padding:0 calc(3.5vw + 5px);
    display:flex;
    justify-content:center;
    align-items:center;

    &:before{
        content:"";
        background-position:top;
        background-image:url('/images/login-background.jpg');
        position:absolute;
        background-size: cover;
        background-repeat:no-repeat;
        left:0;
        right:0;
        top:0;
        bottom:0;
        z-index:-1;
    }
`

const Content = styled.div`
    max-width:650px;
    width:90%;
    padding:80px 40px;
    display:flex;
    flex-direction:column;

`

const CTALogoOne = styled.img`
    width:100%;

`
const CTALogoTwo = styled.img`
    width:100%;
`
const SignUp = styled.button`
    background:#0063e5;
    color:#f9f9f9;
    width:100%;
    padding:17px;
    font-size:18px;
    border:none;
    border-radius:5px;
    font-weight:bold;
    margin-bottom: 10px;
    margin-top: 10px;
    cursor:pointer;
    letter-spacing:1.5px;
    transition:all 250ms;

    &:hover{
        background:#0051bc;
    }
`

const Description = styled.div`
    margin-bottom:10px;
    color:rgb(249,249,249);
    font-size:12px;
    text-align:center;
    letter-spacing:1.5px;
    line-height:1.5;
`