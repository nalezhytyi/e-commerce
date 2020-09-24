import React from 'react';
import { useSpring, animated } from 'react-spring';
import CustomButton from '../../components/custom-button/CustomButton';
import { ContactImageContainer, ContactPageContainer, ContactPageText } from './Contact.styles';

const Contact = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <ContactPageContainer>
        <ContactImageContainer imageUrl={'https://i.imgur.com/lKJiT77.png'} />
        <h2>A Dog Ate this Page</h2>
        <ContactPageText>
          Your dog is cute but honestly a menace. Where are my shoes? Where is my graduation
          certificate? Where is the chocolate cake I baked for my Aunt’s birthday? And why did you
          take your dog to the vet on that same Thursday?!
        </ContactPageText>
        <CustomButton inverted onClick={() => (window.location.href = 'mailto:kawory05@gmail.com')}>
          Contact me
        </CustomButton>
      </ContactPageContainer>
    </animated.div>
  );
};

export default Contact;
