import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import styled from 'styled-components';

import UserContext from "./contexts/UserContext";

import LoginScreen from "./Pages/LoginScreen";
import SignUpScreen from "./Pages/SignUpScreen";

export default function App() {
    const [userData, setUserData] = useState("");

    console.log(userData);

    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <UserContext.Provider value={{ setUserData }} >
                            <LoginScreen />
                        </UserContext.Provider>
                    } />

                    <Route path="/SignUp" element={<SignUpScreen />} />
                </Routes>
            </BrowserRouter>

        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    
    background-color: #8C11BE;
`;