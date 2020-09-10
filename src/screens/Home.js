import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Jumbotron from '../components/Jumbotron'
import { Container, Row, Col } from 'react-bootstrap'
import EventCard from '../components/EventCard'
import ProjectCard from '../components/ProjectCard'
import styled from 'styled-components';
import moment from 'moment'
import atomSymbol from '@iconify/icons-noto/atom-symbol';



const Styles = styled.div`
    .container {
        // margin-bottom: 20px;
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
        font-weight: 600;
        margin: 10px;
        text-align: center;
        vertical-align: baseline;
      }
    
`;

export default function Home() {
    
    const [pastMeeting, setPastMeeting] = useState({})
    const [nextUp, setNextUp] = useState({})
    const [error, setError] = useState(null)

        useEffect(() => {
            const fetchData = async () => {
                
                const Cosmic = require('cosmicjs')
                const api = Cosmic()
                const bucket = api.bucket({
                    slug: 'programming-club',
                    read_key: process.env.REACT_APP_READ_KEY,
                })
                const objects = (await bucket.getObjects()).objects
                console.log(objects)
                setPastMeeting(objects.filter(item => item.metadata.completed)[0].metadata)
                setNextUp(objects.filter(item => !item.metadata.completed)[0].metadata)
            }
            fetchData()
        },[])
        
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
                                key={pastMeeting._id}
                                background={`linear-gradient(294.87deg, ${pastMeeting.gradient_start} 4.32%, ${pastMeeting.gradient_end} 85.78%)`}
                                icon={pastMeeting.icon && pastMeeting.icon.url}
                                title={pastMeeting.name}
                                date={moment(pastMeeting.date_start).format('dddd, MMMM Do')}
                                button='Summary'
                            />
                        </Col>
                        <Col lg>
                            <p className='category-title'>Next Up</p>
                            <EventCard
                                key={nextUp._id}
                                background={`linear-gradient(294.87deg, ${nextUp.gradient_start} 4.32%, ${nextUp.gradient_end} 85.78%)`}
                                icon={nextUp.icon && nextUp.icon.url}
                                title={nextUp.name}
                                date={moment(nextUp.date_start).format('dddd, MMMM Do')}
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
                <p className='bottom-text'>Made with <span aria-label='purple-heart' role='img'>💜</span> by Buckley's Programming Club</p>
                </div>
                
            </div>
            
        </Styles>
    )
}