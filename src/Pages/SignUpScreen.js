import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";

export default function SignUpScreen() {
    return (
        <Container>

            <h1>MyWallet</h1>

            <SignUpForm />

            <Link to="/" style={{ textDecoration: 'none' }}>
                    <SignLink>Já tem uma conta? Entre agora!</SignLink>
                </Link>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 100vh;

    h1 {
        color: #FFFFFF;
        font-size: 32px;
    }
`;

const SignLink = styled.p`    
    margin-top: 20px;
    
    font-weight: bold;
    font-size: 15px;
    color: #FFFFFF;
`;