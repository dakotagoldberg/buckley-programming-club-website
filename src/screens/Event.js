import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import moment from 'moment'


const Styles = styled.div`
    .content {
        // margin-top: 20px;
        font-size: 22px;
        font-weight: 600,
    }
    h1 {
        font-weight: bold;
        font-size: 44px;
        margin-left: 10px;
    }
    h3 {
        font-weight: bold;
        font-size: 40x;
        margin-left: 10px;
    }
    li {
        list-style: none;
        list-style-position: outside;
        background: #1B1C3D;
        margin-top: 15px;
        padding: 10px;
        padding-left: 15px;
        padding-right: 15px;
        border-radius: 10px;
        // max-width: 500px;
        margin-left: -32px;
    }
    .color-box {
        margin-left: 16px;
        width: 220px;
        height: 220px;
        border-radius: 40px;
    }
    .icon {
        margin-left: -20px;
        margin-top: -16px;
        pointer-events: none;
    }
    .extra {
        margin-top: 60px;
    }
    .event-date {
        font-weight: 400;
        font-size: 24px;
        color: #646DDF;
    }
`;

export default function Event() {
    const Cosmic = require('cosmicjs')
            const api = Cosmic()
            const bucket = api.bucket({
                slug: 'programming-club',
                read_key: process.env.REACT_APP_READ_KEY,
            })

    let { slug } = useParams();

    const [event, setEvent] = useState({})

    useEffect(() => {
    const fetchBlog = async () => {
    const post = (await bucket.getObject({
        slug: slug,
        props: "_id,title,content,metadata"
        })).object;
      setEvent(post)
    };
    fetchBlog()
  }, [bucket, slug]);

    return (
        <Styles>
            {event && event.metadata && (
                <Container className='content'>
                    <Row>
                        <Col lg={6}>
                            <h1 className='event-title'>{event.metadata.name}</h1>
                            <h3 className='event-date'>{moment(event.metadata.date_start).format('dddd, MMMM Do')}</h3>
                            <br></br>
                            <div dangerouslySetInnerHTML={{__html: event.metadata.completed ? event.metadata.summary : event.metadata.description}}/>
                        </Col>
                        {event.metadata.extra && (
                            <>
                            <Col lg={1}>{}</Col>
                            <Col lg={5} className='extra'>
                                {/* <h1 className='event-title'>{event.metadata.extra_title}</h1> */}
                                <br></br>
                                <div dangerouslySetInnerHTML={{__html: event.metadata.extra}}/>
                            </Col>
                        </>
                        )}
                        
                        {/* <Col lg={6} className='image-area' style={{minHeight: 500, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center'}}> */}
                            {/* <div className='color-box' style={{background: `linear-gradient(294.87deg, ${event.metadata.gradient_start} 4.32%, ${event.metadata.gradient_end} 85.78%)`}}>
                                <img className='icon' src={event.metadata.icon.url} height={260} alt='' />
                            </div> */}
                        {/* </Col> */}
                    </Row>
                </Container>
            )}
        </Styles>
    )
}