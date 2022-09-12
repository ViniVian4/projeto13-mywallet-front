import React from "react";
import { useState, useContext, useEffect } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import axios from 'axios';

import UserContext from "../contexts/UserContext";
import logoff from "../assets/logoff.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";

export default function WalletScreen() {
    const { userData } = useContext(UserContext);
    const { name, token } = userData;

    const [loading, setLoading] = useState(true);
    const [deposits, setDeposits] = useState([]);
    
    let balance = 0;

    useEffect(() => {
        const promise = axios.get(
            "http://localhost:5000/wallet",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        promise.catch(response => { console.log("algo deu errado") });

        promise.then(response => {
            setDeposits(response.data.depositsArray);
            setLoading(false);
        });
    }, []);

    return (
        <Container>
            <Header>
                <p>Olá, {name}</p>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img src={logoff} />
                </Link>
            </Header>

            <WalletContainer>
                {
                    loading ?
                        (
                            <NoRecords><p>Não há registros de
                                entrada ou saída</p></NoRecords>
                        )
                        :
                        (
                            <>
                                <DepositsContainer>
                                    {
                                        deposits.map(deposit => {
                                            if (!deposit.isDeposit){
                                                balance -= deposit.value;
                                            }
                                            else{
                                                balance += deposit.value;
                                            }
                                            return (
                                            <DepositLine>
                                                <div>
                                                    <Date>{deposit.date}</Date>
                                                    <Description>{deposit.description}</Description>
                                                </div>
                                                <Value color={deposit.isDeposit ? "#03AC00" : "#C70000"}>{deposit.value.toFixed(2)}</Value>

                                            </DepositLine>
                                        );})
                                    }
                                </DepositsContainer>

                                <DepositLine><h2>SALDO</h2> <Balance color={balance>=0 ? "#03AC00" : "#C70000"}>{balance}</Balance></DepositLine>
                            </>
                        )
                }
            </WalletContainer>

            <ButtonsContainer>
                <Link to="/deposit" style={{ textDecoration: 'none', width: "48%", backgroundColor: "#A328D6", borderRadius: "10px" }}>
                    <button>
                        <img src={plus} />
                        <p>Nova entrada</p>
                    </button>
                </Link>
                <Link to="/withdraw" style={{ textDecoration: 'none', width: "48%", backgroundColor: "#A328D6", borderRadius: "10px" }}>
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

    margin-top: 30px;
    
    display: flex;
    justify-content:space-between;

    color: #FFFFFF;
    font-size: 27px;
    font-weight: bold;
`;

const WalletContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    width: 85%;
    max-width: 500px;
    min-width: 300px;
    height: auto;
    min-height: 500px;

    margin-top: 22px;
    margin-bottom: 15px;
    padding-bottom: 30px;

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

    margin-bottom: 20px;

    display: flex;
    justify-content: space-between;

    button {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
        min-width: 145px;
        width: 100%;

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

const DepositsContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    margin-bottom: 30px;
`;

const DepositLine = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;

    margin-top: 23px;
    margin-left: 20px;
    padding-right: 30px;

    font-size: 16px;

    h2 {
        font-weight: bold;
        font-size: 18px;
    }
`;

const Date = styled.p`
    color: #C6C6C6;
`;

const Description = styled.p`
    color: #000000;
    word-break: break-all;
    width: 75%;
`;

const Value = styled.p`
    color: ${props => (props.color)};
`;

const Balance = styled.p`
    color: ${props => (props.color)};
`;