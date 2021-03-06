import React from 'react'
import styled from 'styled-components';
import {
    Link,
  } from "react-router-dom";
  import { Button } from 'react-bootstrap'


export default function ProjectCard(props) {
    const Styles = styled.div`
    .container {
        // max-width: 350px;
        height: 160px;
        display: flex;
        align-items:center;
    }
    .background-box {
        margin-top: 10px;
        margin-left: 8px;
        min-width: 100px;
        height: 100px;
        border-radius: 20px;
        background: #1B1C3D;
    }
    .icon {
        margin-left: -20px;
        margin-top: -20px;
        position: absolute;
        height: 100px;
        width: 100px;
    }
    .meeting-text {
        margin-left: 25px;
    }
    .project-title {
        font-weight: bold;
        font-size: 28px;
        line-height: 30px;
    }
    .languages {
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
                <div className='background-box'>
                    <img className='icon' src={props.icon} height={130} alt='' />
                </div>
                <div className='meeting-text'>
                    <div className='project-title'>{props.title}</div>
                    {/* <div className='languages'>{props.tools}</div> */}
                    <div className='languages'>{props.timeframe}</div>
                    <Link to={'projects/' + props.slug}><Button className='info-button'>{props.button}</Button></Link>
                </div>
            </div>
            
        </Styles>
    )
}
