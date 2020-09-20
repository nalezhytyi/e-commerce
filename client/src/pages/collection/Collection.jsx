import React from 'react';
import './Collection.styles'
import { selectCollection } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { CollectionPageContainer, Items, Title } from './Collection.styles';
import { Trail } from 'react-spring/renderprops-universal';
import { animated } from 'react-spring';

const Collection = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <Title>{title.toUpperCase()}</Title>
            <Items>
                <Trail
                    items={items}
                    keys={item => item.id}
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}>
                    {item => props => <animated.div style={props}><CollectionItem key={item.id} item={item} />
                    </animated.div>}
                </Trail>
            </Items>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)
