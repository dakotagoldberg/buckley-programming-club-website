import React from 'react'
import Jumbotron from '../components/Jumbotron'
import { Container, Row, Col } from 'react-bootstrap'
import EventCard from '../components/EventCard'
import ProjectCard from '../components/ProjectCard'
import styled from 'styled-components';
import flyingSaucer from '@iconify/icons-noto/flying-saucer';
import laptopIcon from '@iconify/icons-noto/laptop';
import atomSymbol from '@iconify/icons-noto/atom-symbol';



const Styles = styled.div`
    .container {
        margin-bottom: 20px;
    }
    .category-title {
        font-weight: bold;
        font-size: 24px;
        margin-left: 10px;
    }

    
    
    .items {
        margin-top: 40px;
    }

    .bottom-text {
        margin-top: 20px;
        text-align: center;
        font-weight: 600;
    }
`;

export default function Home() {
    return (
        <Styles>
            <div>
                <Jumbotron/>
                <div className='items'>
                <Container fluid>
                    <Row>
                        <Col lg>
                            <p className='category-title'>Past Meeting</p>
                            <EventCard
                                background='linear-gradient(109.83deg, #E232FF 4.62%, #F87B20 92.4%)'
                                icon={laptopIcon}
                                title='Meeting #1'
                                date='September 12, 2020'
                                button='Summary'
                            />
                        </Col>
                        <Col lg>
                            <p className='category-title'>Next Up</p>
                            <EventCard
                                background='linear-gradient(294.87deg, #515BEA 4.32%, #B10CFF 85.78%)'
                                icon={flyingSaucer}
                                title='Meeting #2'
                                date='September 19, 2020'
                                button='Details'
                            />
                        </Col>
                        <Col lg='auto'>
                        <p className='category-title'>Current Project</p>
                            <ProjectCard
                                    background='linear-gradient(294.87deg, #515BEA 4.32%, #B10CFF 85.78%)'
                                    icon={atomSymbol}
                                    title='Club Website'
                                    languages='React.js'
                                    button='Learn More'
                                />
                        </Col>
                    </Row>
                </Container>
                </div>
                <p className='bottom-text'>Made with 💜 by Buckley's Programming Club</p>
            </div>
            
        </Styles>
    )
}