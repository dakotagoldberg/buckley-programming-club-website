import React from 'react'
import styled from 'styled-components';
import { Container, Form, InputGroup, FormControl, Col, Button } from 'react-bootstrap'

const Styles = styled.div`
    .content {
        // margin-top: 20px;
        font-size: 22px;
        font-weight: 600,
        display: flexbox;
        text-align: center;
        padding-top: 15px;
        justify-content: center;
        align-items: center;
        height: 500px;
        max-width: 1000px;
    }
    h1 {
        font-weight: bold;
        font-size: 44px;
        margin-left: 10px;
    }
    p {
        margin-top: 20px;
    }
    .code {
        background: #1B1C3D;
        font-family: Monaco;
        font-weight: 700;
        color: #515BEA;
        padding: 10px;
        border-radius: 10px;
        margin: 5px;
    }
    .name-input {
        background: #1B1C3D;
        border: none;
        height: 70px;
        font-size: 24;
    }
    
    .form {
        max-width: 600px;
        width: 100%;
    }
`;

export default function Join() {
    return (
        <Styles>
            <Container className='content'>
                <h1>Join Programming Club</h1>
                <p>Join our email list for meeting codes, notifications, opportunities, and more.</p>
                <iframe title='join' src="https://docs.google.com/forms/d/e/1FAIpQLSeSFjNq8RQZ_ZaX19yV5Up1EnzWwWJSoQjpHDFIjyLLNVk8OA/viewform?embedded=true" className='form' height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Container>
        </Styles>
    )
}