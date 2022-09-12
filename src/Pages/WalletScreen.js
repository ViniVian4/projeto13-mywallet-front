import React from "react";
import { useContext } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import UserContext from "../contexts/UserContext";
import logoff from "../assets/logoff.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";

export default function WalletScreen() {
    const { userData } = useContext(UserContext);
    const { name, token } = userData;

    return (
        <Container>
            <Header>
                <p>Olá, {name}</p>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img src={logoff} />
                </Link>
            </Header>

            <WalletContainer>
                <NoRecords><p>Não há registros de
                    entrada ou saída</p></NoRecords>
            </WalletContainer>

            <ButtonsContainer>
                <Link to="/deposit" style={{ textDecoration: 'none' }}>
                    <button>
                        <img src={plus} />
                        <p>Nova entrada</p>
                    </button>
                </Link>
                <Link to="/withdraw" style={{ textDecoration: 'none' }}>
                    <button>
                        <img src={minus} />
                        <p>Nova
                            saída</p>
                    </button>
                </Link>
            </ButtonsContainer>


        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
`;

const Header = styled.div`
    width: 85%;
    max-width: 500px;
    min-width: 300px;
    
    display: flex;
    justify-content:space-between;

    color: #FFFFFF;
    font-size: 27px;
    font-weight: bold;
`;

const WalletContainer = styled.div`
    width: 85%;
    max-width: 500px;
    min-width: 300px;
    height: 450px;

    margin-top: 22px;
    margin-bottom: 15px;

    border-radius: 8px;

    background-color: #FFFFFF;
`;

const NoRecords = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 20px;
    color: #868686;

    text-align: center;

    width: 100%;
    height: 100%;

    p {
        width: 60%;
    }
`;

const ButtonsContainer = styled.div`
    width: 85%;
    max-width: 500px;
    min-width: 300px;

    display: flex;
    justify-content: space-between;

    button {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
        min-width: 145px;
        width: 48%;

        height: 100px;

        border-radius: 8px;
        border: none;

        background-color: #A328D6;
        color: #FFFFFF;
    }

    p {
        font-size: 17px;
        font-weight: bold;
    }
`;