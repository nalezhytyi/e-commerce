import React from 'react';
import dog from '../../assets/images/no-idea-what-ima-doing.jpg'
import { useSpring, animated } from 'react-spring';

const Contact = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } })
    return (
        <animated.div style={props}>
            <div style={contactPageStyle}>
                <h3>Contact me :</h3>
                <div>
                    <a href='mailto:kawory05@gmail.com'>kawory05@gmail.com</a>
                </div>
                <div>
                    <img style={{ width: '100%', marginTop: 35 }} src={dog} alt='i have no idea what ima doing' />
                </div>
            </div>
        </animated.div>
    );
};
const contactPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18
}

export default Contact;
