import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
import { useParams } from 'react-router-dom'


const Styles = styled.div`
    .content {
        // margin-top: 20px;
        font-size: 20px;
        font-weight: 600,
    }
    h1 {
        font-weight: bold;
        font-size: 44px;
        margin-left: 10px;
    }
    h3 {
        font-weight: bold;
        font-size: 36x;
        margin-left: 10px;
    }
    h3 {
        font-weight: bold;
        font-size: 36x;
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
        max-width: 500px;
        margin-left: -30px;
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
  }, []);

    return (
        <Styles>
            {event.metadata && (
                <Container className='content'>
                    <h1 className='event-title'>{event.metadata.name}</h1>
                    <br></br>
                    <div dangerouslySetInnerHTML={{__html: event.metadata.summary}}/>
                </Container>
            )}
        </Styles>
    )
}