import React, {useRef, useState} from 'react'
import styled from 'styled-components';
import { Container } from 'react-bootstrap'
import { useWindowSize } from '@react-hook/window-size'
import Confetti from 'react-confetti'
import Reward from 'react-rewards';


const Styles = styled.div`
    .content {
        // margin-top: 20px;
        font-size: 22px;
        font-weight: 600,
        display: flexbox;
        text-align: center;
        padding-top: 15px;
        justify-content: center;
        align-items: center;
        height: 500px;
        max-width: 1000px;
    }
    h1 {
        font-weight: bold;
        font-size: 44px;
        margin-left: 10px;
        margin-bottom: 15px;
    }
    .surprise-button {
        padding: 10px 20px 10px 20px;
        background-color: #1B1C3D;
        border-radius: 10px;
        min-width: 20px;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 20px;
        align-self: center;
    }
    .form {
        max-width: 600px;
        width: 100%;
    }
`;

export default function Meeting1Secret() {
    const { width, height } = useWindowSize()
    const [confetti, setConfetti] = useState(false)
    const rewardRef = useRef();
    const rewardUser = () => {
        rewardRef.current.rewardMe();
        setConfetti(true)
    }
    
    return (
        <Styles>
            <Confetti
                width={width}
                height={height}
                numberOfPieces={250}
                tweenDuration={15000}
                recycle={false}
                run={confetti}
            />
            <Container className='content'>
                <h1>You found it!</h1>
                <Reward
                    ref={rewardRef}
                    type='emoji'
                    config={{
                        elementSize: 30,
                        spread: 80,
                        elementCount: 80,
                        emoji: ['🎉', '🎉', '🎉', '💻', '⌨️', '👾', '💜', '💜', '🎊', '🎊', '🥂', '📱', '👩‍💻', '👨‍💻'],
                    }}
                >
                    <div className='surprise-button' onClick={rewardUser} >Click for a surprise</div>
                    <iframe title='join' src="https://docs.google.com/forms/d/e/1FAIpQLSfxVEBnUV7JivhLy6lcQOQzu1I6OlHfpnaCMbhQaZuL4gfFpA/viewform?embedded=true" className='form' height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </Reward>
            </Container>
        </Styles>
    )
}