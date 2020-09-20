import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    BackgroundImageContainer,
    ContentContainer,
    ContentSubtitle,
    ContentTitle,
    MenuItemContainer
} from './MenuItem.styles';
import { useSpring } from 'react-spring';

const MenuItem = ({ section, history, match }) => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } })
    return (
        <MenuItemContainer
            style={props}
            size={section.size}
            onClick={() => history.push(`${match.url}${section.linkUrl}`)}>
            <BackgroundImageContainer className='background-image' imageUrl={section.imageUrl} />
            <ContentContainer className='content'>
                <ContentTitle>{section.title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem)

