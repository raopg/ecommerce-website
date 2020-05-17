import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.values(collections) : []
)

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : null
    );