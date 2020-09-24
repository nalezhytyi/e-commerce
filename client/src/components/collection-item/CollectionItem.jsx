import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import {
  AddButton,
  CollectionFooter,
  CollectionImage,
  CollectionItemContainer,
  Name,
  Price,
} from './CollectionItem.styles';
import { useSpring } from 'react-spring';

const CollectionItem = ({ item, addItem }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer style={props}>
      <CollectionImage imageUrl={imageUrl} />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}$</Price>
      </CollectionFooter>
      <AddButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
