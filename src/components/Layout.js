import React from 'react'
import { Container } from 'react-bootstrap'
import '../App.css'

export default function Layout(props) {
    return(
        <Container fluid className='container-styles'>
            {props.children}
        </Container>
    )
}