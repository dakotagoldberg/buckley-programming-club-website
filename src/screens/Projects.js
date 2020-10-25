import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard'
import moment from 'moment'


const Styles = styled.div`
    .content {
        // margin-top: 20px;
    }
    .category-title {
        font-weight: bold;
        font-size: 36px;
        margin-left: 10px;
        display: block;
    }
    .item {
        padding-bottom: 30px;
    }
`;

export default function Schedule() {

    const [projects, setProjects] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const Cosmic = require('cosmicjs')
            const api = Cosmic()
            const bucket = api.bucket({
                slug: 'programming-club',
                read_key: process.env.REACT_APP_READ_KEY,
            })
            const objects = (await bucket.getObjects({type: 'projects',})).objects
            // console.log(objects)
            // console.log(objects)
            setProjects(objects.filter(item => !item.metadata.completed))
        }
        fetchData()
    },[])

    if (error) {
        return <div>An error occured: {error.message}</div>
     }

    return (
        <Styles>
            <Container className='content'>
            <p className='category-title'>Projects</p>
                <Row>
                    
                        {projects.map(project => (
                             <Col lg={4} md={6} className='item'>
                                <ProjectCard
                                key={project.metadata_id}
                                icon={project.metadata.icon && project.metadata.icon.url}
                                title={project.metadata.name}
                                tools={project.metadata.tools}
                                timeframe={project.metadata.timeframe}
                                button='Details'
                                slug={project.slug}
                                />
                            </Col>
                        ))}
                
                </Row>
            </Container>
        </Styles>
    )
}