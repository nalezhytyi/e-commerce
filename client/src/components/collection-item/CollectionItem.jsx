import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import {
    AddButton,
    CollectionFooter,
    CollectionImage,
    CollectionItemContainer,
    Name,
    Price
} from './CollectionItem.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return <CollectionItemContainer>
        <CollectionImage imageUrl={imageUrl}/>
        <CollectionFooter>
            <Name>{name}</Name>
            <Price>{price}$</Price>
        </CollectionFooter>
        <AddButton onClick={() => addItem(item)} inverted>
            ADD TO CART
        </AddButton>
    </CollectionItemContainer>
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
