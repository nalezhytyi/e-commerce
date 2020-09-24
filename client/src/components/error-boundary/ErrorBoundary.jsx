import React from 'react';
import {
  ErrorBoundaryContainer,
  ErrorBoundaryText,
  ErrorImageContainer,
} from './ErrorBoundary.styles';
import CustomButton from '../custom-button/CustomButton';

class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false,
  };

  static getDerivedStateFromError(error) {
    //precess the error
    return { hasErrored: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorBoundaryContainer>
          <ErrorImageContainer imageUrl={'https://i.imgur.com/lKJiT77.png'} />
          <h2>A Dog Ate this Page</h2>
          <ErrorBoundaryText>
            Your dog is cute but honestly a menace. Where are my shoes? Where is my graduation
            certificate? Where is the chocolate cake I baked for my Aunt’s birthday? And why did you
            take your dog to the vet on that same Thursday?!
          </ErrorBoundaryText>
          <CustomButton
            inverted
            onClick={() => (window.location.href = 'mailto:kawory05@gmail.com')}
          >
            Contact me
          </CustomButton>
        </ErrorBoundaryContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
