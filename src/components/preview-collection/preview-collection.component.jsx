import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'

import { PreviewCollectionContainer, PreviewContainer, TitleContainer } from './preview-collection.styles'

//import './preview-component.styles.scss';

const PreviewCollection = ({ title, items }) => (
    <PreviewCollectionContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {
                items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                    ))
            }
        </PreviewContainer>
    </PreviewCollectionContainer>
)

export default PreviewCollection;