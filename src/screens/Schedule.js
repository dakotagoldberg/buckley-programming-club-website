import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
import EventCard from '../components/EventCard'
import flyingSaucer from '@iconify/icons-noto/flying-saucer';
import laptopIcon from '@iconify/icons-noto/laptop';



const Styles = styled.div`
    .content {
        // margin-top: 20px;
    }
    .category-title {
        font-weight: bold;
        font-size: 24px;
        margin-left: 10px;
    }
`;

export default function Schedule() {
    return (
        <Styles>
            <Container className='content'>
                <Row>
                    <Col md={7}>
                        <p className='category-title'>Schedule</p>
                        <EventCard
                                background='linear-gradient(294.87deg, #515BEA 4.32%, #B10CFF 85.78%)'
                                icon={flyingSaucer}
                                title='Meeting #2'
                                date='September 19, 2020'
                                button='Details'
                            />
                    </Col>
                    <Col md={5}>
                        <p className='category-title'>Past Events</p>

                        <EventCard
                                background='linear-gradient(109.83deg, #E232FF 4.62%, #F87B20 92.4%)'
                                icon={laptopIcon}
                                title='Meeting #1'
                                date='September 12, 2020'
                                button='Summary'
                        />
                        <EventCard
                                background='linear-gradient(109.83deg, #E232FF 4.62%, #F87B20 92.4%)'
                                icon={laptopIcon}
                                title='Meeting #0'
                                date='September 5, 2020'
                                button='Summary'
                        />
                    </Col>
                </Row>
            </Container>
        </Styles>
    )
}