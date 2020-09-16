import React from 'react';
import './Collection.styles'
import { selectCollection } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { CollectionPageContainer, Items, Title } from './Collection.styles';

const Collection = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <Title>{title.toUpperCase()}</Title>
            <Items>
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </Items>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)
