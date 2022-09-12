import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import LoginForm from "../components/LoginForm";

export default function LoginScreen() {    
    return (
        <Container>

            <h1>MyWallet</h1>

            <LoginForm />

            <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <SignLink>Primeira vez? Cadastre-se!</SignLink>
                </Link>

        </Container>
    );
};

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
