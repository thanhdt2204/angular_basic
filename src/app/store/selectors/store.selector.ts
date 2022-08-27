import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StoreState } from "../state/store.state";

export const featureStore = createFeatureSelector<StoreState>("feature_store");

export const selectStore = createSelector(featureStore, state => state.store);