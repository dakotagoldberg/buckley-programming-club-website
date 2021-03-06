import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components';
import People from '../assets/images/programming-people-purple.png'

const Styles = styled.div`
    .jumbo {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #1B1C3D;
        color: #fff;
        height: 310px;
        text-align: center;
        position: relative;
        border-radius: 30px;
        marginBottom: 50px;
        overflow: hidden;
        z-index: 2;
    }
    .title {
        font-size: 54px;
        font-weight: 700;
        margin-top: 20px;
    }
    @media screen and (max-width: 500px) {
        .title {
          font-size: 32px;
        }
      }
    .image {
        height: 520px;
        position: absolute;
        z-index: 1;
        filter: saturate(150%);
    }
`;

export default function Jumbotron() {
    return (
        <Styles>
            <Jumbo fluid className='jumbo'>
                <img className='image' src={People} alt=''/>
                    <Container>
                        <h1 className='title'>Programming Club</h1>
                    </Container>
            </Jumbo>
        </Styles>
    )
}
