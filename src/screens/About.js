import React from 'react'
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap'

const Styles = styled.div`
    .content {
        // margin-top: 20px;
        font-size: 22px;
        font-weight: 600,
        display: flexbox;
        text-align: center;
        padding-top: 100px;
        justify-content: center;
        align-items: center;
        height: 500px;
    }
    h1 {
        font-weight: bold;
        font-size: 44px;
        margin-left: 10px;
    }
`;

export default function About() {
    return (
        <Styles>
            <Container className='content'>
                <h1>About</h1>
                <p>More info coming soon</p>
            </Container>
        </Styles>
    )
}