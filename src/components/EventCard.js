import React from 'react'
import styled from 'styled-components';
import { Icon, InlineIcon } from '@iconify/react';
import { Button } from 'react-bootstrap'
import {
    Link,
  } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Event from '../screens/Event';


export default function EventCard(props) {
    const Styles = styled.div`
    .container {
        // height: 150px;
        padding-top: 20px;
        padding-bottom: 20px;
        width: 98%;
        background: #1B1C3D;
        border-radius: 20px;
        display: flex;
        align-items:center;
        margin-bottom: 20px;
    }
    .color-box {
        margin-left: 8px;
        width: 110px;
        height: 110px;
        border-radius: 20px;
        background: ${props.background};
    }
    .icon {
        margin-left: -10px;
        margin-top: -8px;
        pointer-events: none;
    }
    .meeting-text {
        margin-left: 25px;
    }
    .meeting-title {
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
    }
    .meeting-date {
        font-size: 17px;
        color: #646DDF;
    }
    .info-button {
        margin-top: 15px;
        background: #515BEA;
        border-radius: 100px;
        border: 0px;
        font-size: 15px;
        font-weight: 700;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 15px;
        padding-right: 15px;

        &:hover, &:focus, &:active {
            background: #333CBB!IMPORTANT;
            border: 0px;
        }
    }
`;
    return (
        <Styles>
            <div className='container'>
                <div className='color-box'>
                    {/* <Icon className='icon' height={130} icon={props.icon} /> */}
                    <img className='icon' src={props.icon} height={130} alt='' />
                </div>
                <div className='meeting-text'>
                    <div className='meeting-title'>{props.title}</div>
                    <div className='meeting-date'>{props.date}</div>
                    <Link to={'events/' + props.slug}><Button className='info-button'>{props.button}</Button></Link>
                </div>
            </div>
        </Styles>
    )
}
