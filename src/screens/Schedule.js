import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
import EventCard from '../components/EventCard'
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
    const [pastEvents, setPastEvents] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const Cosmic = require('cosmicjs')
            const api = Cosmic()
            const bucket = api.bucket({
                slug: 'programming-club',
                read_key: process.env.REACT_APP_READ_KEY,
            })
            const objects = (await bucket.getObjects({type: 'events'})).objects
            // console.log(objects)
            setPastEvents(objects.filter(item => item.metadata.completed))
            setEvents(objects.filter(item => !item.metadata.completed).reverse())
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
                    <Col lg={7}>
                        <p className='category-title'>Schedule</p>
                        {events.map(event => (
                            <EventCard
                            key={event.metadata_id}
                            background={`linear-gradient(294.87deg, ${event.metadata.gradient_start} 4.32%, ${event.metadata.gradient_end} 85.78%)`}
                            icon={event.metadata.icon && event.metadata.icon.url}
                            title={event.metadata.name}
                            date={moment(event.metadata.date_start).format('dddd, MMMM Do')}
                            button='Details'
                            slug={'events/' + event.slug}
                        />
                        ))}
                        
                    </Col>
                    <Col lg={5}>
                        <p className='category-title'>Past Events</p>
                            {pastEvents.map(event => (
                                <EventCard
                                key={event.metadata_id}
                                background={`linear-gradient(294.87deg, ${event.metadata.gradient_start} 4.32%, ${event.metadata.gradient_end} 85.78%)`}
                                icon={event.metadata.icon && event.metadata.icon.url}
                                title={event.metadata.name}
                                date={moment(event.metadata.date_start).format('dddd, MMMM Do')}
                                button='Summary'
                                slug={'events/' + event.slug}
                            />
                            ))}
                    </Col>
                </Row>
            </Container>
        </Styles>
    )
}