import React from 'react';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import Collection from '../category/Collection';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionOverViewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
    state = {
        loading: true
    };

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({ loading: false })
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop=page'>
                <Route exact path={`${match.path}`}
                       render={props => <CollectionOverViewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`}
                       render={props => <CollectionWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop)
