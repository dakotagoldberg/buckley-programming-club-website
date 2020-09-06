import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import Logo from '.././assets/logo.png'

const Styles = styled.div`
    .navbar {
        background-color: transparent;
        margin-top: 25px;
    }
    .navbar-brand, .navbar-nav .nav-link {
        color: white;
        font-weight: 700;
        font-size: 20px;
        margin-left: 10px;

        &:hover {
            color: #646DDF;
        }
    }
    .toggle {
        
    }
`;

export default function NavigationBar() {
    return (
        <Styles>
            <Navbar expand='lg'>
    <Navbar.Brand href='/'>
    <img
        src={Logo}
        height="50"
        className="d-inline-block align-top"
        alt=""
      />
    </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-basic-nav' className='navbar-dark' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>
                        <Nav.Item><Nav.Link href='/about'>about</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/schedule'>schedule</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/projects'>projects</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/challenges'>challenges</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/contribute'>contribute</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}
