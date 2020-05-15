import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import PreviewCollection from '../preview-collection/preview-collection.component';
import { selectCollectionForPreview }  from '../../redux/shop/shop.selectors';

import { CollectionsOverviewContainer } from './collections-overview.styles'

//import './collections-overview.component.scss';

const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {collections.map(({id, ...otherCollectionProps}) => (
            <PreviewCollection key = {id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)