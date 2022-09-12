import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import styled from 'styled-components';

import LoginScreen from "./Pages/LoginScreen";
import SignUpScreen from "./Pages/SignUpScreen";

export default function App() {
    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen/>} />

                    <Route path="/SignUp" element={<SignUpScreen/>} />
                </Routes>
            </BrowserRouter>

        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    
    background-color: #8C11BE;
`;