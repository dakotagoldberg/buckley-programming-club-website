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
                // console.log(objects)
                setPastMeeting(objects.filter(item => item.metadata.completed)[0])
                setNextUp(objects.filter(item => !item.metadata.completed)[(objects.filter(item => !item.metadata.completed)).length - 1])
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
                            {pastMeeting.metadata && (
                                <EventCard
                                key={pastMeeting.metadata._id}
                                background={`linear-gradient(294.87deg, ${pastMeeting.metadata.gradient_start} 4.32%, ${pastMeeting.metadata.gradient_end} 85.78%)`}
                                icon={pastMeeting.metadata.icon && pastMeeting.metadata.icon.url}
                                title={pastMeeting.metadata.name}
                                date={moment(pastMeeting.metadata.date_start).format('dddd, MMMM Do')}
                                button='Summary'
                                slug={pastMeeting.slug}
                            />
                            )}
                            
                        </Col>
                        <Col lg>
                            <p className='category-title'>Next Up</p>
                            {nextUp.metadata &&  (
                                <EventCard
                                key={nextUp.metadata._id}
                                background={`linear-gradient(294.87deg, ${nextUp.metadata.gradient_start} 4.32%, ${nextUp.metadata.gradient_end} 85.78%)`}
                                icon={nextUp.metadata.icon && nextUp.metadata.icon.url}
                                title={nextUp.metadata.name}
                                date={moment(nextUp.metadata.date_start).format('dddd, MMMM Do')}
                                button='Details'
                                slug={nextUp.slug}
                            />
                            )}
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