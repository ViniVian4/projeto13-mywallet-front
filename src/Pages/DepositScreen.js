import React from "react";
import { useState } from "react";
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function DepositScreen() {
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    return (
        <Container>
            <Header>
                <p>Nova Entrada</p>
            </Header>

            <DepositForm>
                <form>
                    <input type="number" placeholder="Valor" value={value}
                        onChange={v => setValue(v.target.value)} required />

                    <input type="text" placeholder="Descrição" value={description}
                        onChange={v => setDescription(v.target.value)} required />

                    <button type="submit">
                        <p>Salvar entrada</p>
                    </button>
                </form>
            </DepositForm>
        </Container>

    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;
`;

const Header = styled.div`
    width: 85%;
    max-width: 500px;
    min-width: 300px;

    margin-top: 50px;
    
    display: flex;
    justify-content:space-between;

    color: #FFFFFF;
    font-size: 27px;
    font-weight: bold;
`;

const DepositForm = styled.div`
    width: 85%;
    max-width: 500px;
    min-width: 300px;
    margin-top: 30px;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        width: 100%;
        height: 60px;

        margin-bottom: 15px;
        padding-left: 10px;

        border: none;
        border-radius: 8px;

        outline: none;

        font-size: 20px;
    }

    input::placeholder {
        color: #000000;
        font-family: 'Raleway', sans-serif;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 100%;
        height: 45px;

        border: none;
        border-radius: 8px;

        font-size: 20px;

        background-color: #A328D6;
        color: #FFFFFF;
    }
`;