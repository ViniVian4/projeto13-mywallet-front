import React from "react";
import { useState, useContext } from "react";
import styled from 'styled-components';

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <>
            <CredentialsContainer>
                <form>
                    <input type="email" value={email} placeholder="E-mail" 
                    onChange={v => setEmail(v.target.value)} required />

                    <input type="password" value={password} placeholder="Senha" 
                    onChange={v => setPassword(v.target.value)} required />
                    
                    <button type="submit">
                        <p>Entrar</p>
                    </button>
                </form>
            </CredentialsContainer>
        </>
    );
}

const CredentialsContainer = styled.div`
    width: 100%;
    max-width: 500px;
    min-width: 300px;
    margin-top: 30px;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        width: 70%;
        height: 45px;

        margin-bottom: 15px;
        padding-left: 10px;

        border: none;
        border-radius: 8px;

        outline: none;

        font-size: 20px;
    }

    input::placeholder {
        color: #000000;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 70%;
        height: 45px;

        border: none;
        border-radius: 8px;

        font-size: 20px;

        background-color: #A328D6;
        color: #FFFFFF;
    }
`;