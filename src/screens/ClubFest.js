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
        margin-bottom: 15px;
    }
    .code {
        background: #1B1C3D;
        font-family: Monaco;
        font-weight: 700;
        color: #515BEA;
        padding: 10px;
        border-radius: 10px;
        margin: 5px;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export default function ClubFest() {
    return (
        <Styles>
            <Container className='content'>
                <h1>Welcome from Buckley's Club Fest!</h1>
                <p>Feel free to contact <a className='code' href='mailto:dakotagoldberg@buckley.org'>dakotagoldberg@buckley.org</a> if you have any questions.</p>
            </Container>
        </Styles>
    )
}