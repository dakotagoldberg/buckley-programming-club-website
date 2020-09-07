import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
import EventCard from '../components/EventCard'
import flyingSaucer from '@iconify/icons-noto/flying-saucer';
import laptopIcon from '@iconify/icons-noto/laptop';
import axios from 'axios'
import moment from 'moment'


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

    const [events, setEvents] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:1337/events');
                console.log(response.data)
                setEvents(response.data)
            }
            catch(error) {
                setError({ error })
            }
        }
        fetchData()
    },[])

    if (error) {
        return <div>An error occured: {error.message}</div>
     }

    return (
        <Styles>
            <Container className='content'>
                <Row>
                    <Col md={7}>
                        <p className='category-title'>Schedule</p>
                        {events.map(event => {
                            if (!event.completed) {
                                return (
                                    <EventCard
                                        key={event.id}
                                        background={`linear-gradient(294.87deg, ${event.gradient_start} 4.32%, ${event.gradient_end} 85.78%)`}
                                        icon={'http://localhost:1337' + event.icon.url}
                                        title={event.name}
                                        date={moment(event.date_start).format('dddd, MMMM Do, YYYY @ hh:mmA')}
                                        button='Details'
                                    />
                                )
                            }
                            else return (<></>)
                        })}
                        
                    </Col>
                    <Col md={5}>
                        <p className='category-title'>Past Events</p>
                        {events.map(event => {
                            if (event.completed) {
                                return (
                                    <EventCard
                                        key={event.id}
                                        background={`linear-gradient(294.87deg, ${event.gradient_start} 4.32%, ${event.gradient_end} 85.78%)`}
                                        icon={'http://localhost:1337' + event.icon.url}
                                        title={event.name}
                                        date={moment(event.date_start).format('dddd, MMMM Do, YYYY')}
                                        button='Details'
                                    />
                                )
                            }
                            else return (<></>)
                        })}
                    </Col>
                </Row>
            </Container>
        </Styles>
    )
}