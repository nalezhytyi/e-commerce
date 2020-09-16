import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    BackgroundImageContainer,
    ContentContainer,
    ContentSubtitle,
    ContentTitle,
    MenuItemContainer
} from './MenuItem.styles';

const MenuItem = ({ section, history, match }) => {
    return (
        <MenuItemContainer
            size={section.size}
            onClick={() => history.push(`${match.url}${section.linkUrl}`)}>
            <BackgroundImageContainer
                className='background-image'
                imageUrl={section.imageUrl}
            />
            <ContentContainer className='content'>
                <ContentTitle>{section.title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem)

