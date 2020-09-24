import React, { lazy, Suspense, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/Spinner';

const CollectionOverviewContainerPage = lazy(() =>
  import('../../components/collections-overview/CollectionsOverview.container')
);
const CollectionContainerPage = lazy(() => import('../collection/Collection.container'));

const Shop = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionOverviewContainerPage} />
        <Route path={`${match.path}/:collectionId`} component={CollectionContainerPage} />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
