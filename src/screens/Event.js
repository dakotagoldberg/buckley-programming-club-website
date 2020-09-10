import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
import { useParams } from 'react-router-dom'


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
            <Container className='content'>
                <h1>{event.metadata && event.metadata.name}</h1>
            </Container>
        </Styles>
    )
}