import React from 'react'
import styled from 'styled-components';
import { Container, Form, InputGroup, FormControl, Col, Button } from 'react-bootstrap'

const Styles = styled.div`
    .content {
        // margin-top: 20px;
        font-size: 22px;
        font-weight: 600,
        display: flexbox;
        text-align: center;
        padding-top: 100px;
        justify-content: center;
        align-items: center;
        height: 500px;
    }
    h1 {
        font-weight: bold;
        font-size: 44px;
        margin-left: 10px;
    }
    p {
        margin-top: 20px;
    }
    .code {
        background: #1B1C3D;
        font-family: Monaco;
        font-weight: 700;
        color: #515BEA;
        padding: 10px;
        border-radius: 10px;
        margin: 5px;
    }
    .name-input {
        background: #1B1C3D;
        border: none;
        height: 70px;
        font-size: 24;
    }
`;

export default function Join() {
    return (
        <Styles>
            <Container className='content'>
                <h1>Join Programming Club</h1>
                {/* <p>If you are not already a member, enter your Buckley email to be added to the club's email list:</p>
                <Form>
                    <Form.Row className="align-items-center">
                    <Col lg='auto' className="my-1">
                        <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
                            Username
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Append>
                            <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Append>
                            <FormControl id="inlineFormInputGroupUsername" placeholder="Username" />
                        </InputGroup>
                        </Col>
                        <Col lg="auto" className="my-1">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Form.Row>
                </Form> */}

            </Container>
        </Styles>
    )
}