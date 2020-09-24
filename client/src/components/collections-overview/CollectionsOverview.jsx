import React from 'react';
import CollectionPreview from '../collection-preview/CollectionPreview';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import { Overview } from './CollectionsOverview.styles';

const CollectionsOverview = ({ collections }) => (
  <Overview>
    {collections.map(({ id, ...props }) => (
      <CollectionPreview key={id} {...props} />
    ))}
  </Overview>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
