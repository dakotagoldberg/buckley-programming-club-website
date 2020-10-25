import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import moment from 'moment'


const Styles = styled.div`
    .content {
        margin-top: 10px;
        font-size: 22px;
        font-weight: 600,
    }
    .details-panel {
        background-color: #1B1C3D;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items:center;
        padding: 50px 50px 30px 50px;
    }
    .background-box {
        margin-top: 10px;
        margin-left: 8px;
        min-width: 90px;
        height: 90px;
        border-radius: 20px;
        background: #0A0C25;
        margin-bottom: 10px;
    }
    .icon {
        margin-left: -15px;
        margin-top: -15px;
        position: absolute;
        height: 90px;
        width: 90px;
    }
    .project-title {
        font-weight: 700;
        font-size: 36px;
        margin-bottom: 20px;
    }
    .tool {
        font-weight: 500;
        font-size: 18px;
        background-color: #0A0C25;
        color: #646DDF;
        border-radius: 50px;
        padding: 1px 20px 3px 20px;
    }
    .description {
        margin-top: 20px;
        font-weight: 500;
        font-size: 22px;
        // text-align: justify;
    }
    .date {
        font-weight: 500;
        font-size: 22px;
        color: #646DDF;
    }
`;

export default function Project() {
    const Cosmic = require('cosmicjs')
            const api = Cosmic()
            const bucket = api.bucket({
                slug: 'programming-club',
                read_key: process.env.REACT_APP_READ_KEY,
            })

    let { slug } = useParams();

    const [project, setProject] = useState({})

    useEffect(() => {
    const fetchBlog = async () => {
    const post = (await bucket.getObject({
        slug: slug,
        props: "_id,title,content,metadata"
        })).object;
      setProject(post)
    };
    fetchBlog()
  }, [bucket, slug]);

    return (
        <Styles>
            {project && project.metadata && (
                <Container className='content'>
                    <Row>
                        <Col lg={5} className='details-panel'>
                        <div className='background-box'>
                            <img className='icon' src={project.metadata.icon && project.metadata.icon.url} height={130} alt='' />
                        </div>
                        <h1 className='project-title'>{project.metadata.name}</h1>
                        <div className='tool'>{project.metadata.tools}</div>    
                        <div className='description' dangerouslySetInnerHTML={{__html: project.metadata.description}}/>
                        <div className='date'>{project.metadata.timeframe}</div>    
                        </Col>
                        {project.metadata.extra && (
                            <>
                            <Col lg={1}>{}</Col>
                            <Col lg={6} className='extra'>
                                
                            </Col>
                        </>
                        )}
                       
                    </Row>
                </Container>
            )}
        </Styles>
    )
}