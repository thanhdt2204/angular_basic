import { Action, ActionReducer, ActionReducerMap, createReducer, INIT, MetaReducer, on, UPDATE } from "@ngrx/store";
import { Constants } from "src/app/utils/constant";
import * as UserActions from "../actions/user.action";
import { AppState } from "../app.state";
import { StoreState } from "../state/store.state";

const initialState: StoreState = {
    store: {
        isLoggedIn: false,
        token: null
    }
};

const rootReducer = createReducer(
    initialState,
    on(UserActions.loginSuccessAction, (state, data) => {
        return {
            ...state,
            store: {
                isLoggedIn: true,
                token: data.token
            }
        };
    }),
    on(UserActions.logoutSuccessAction, (state) => {
        return {
            ...state,
            store: {
                isLoggedIn: false,
                token: null
            }
        };
    })
);

export function reducer(state: StoreState | undefined, action: Action) {
    return rootReducer(state, action);
}

export const reducers: ActionReducerMap<AppState> = {
    feature_store: reducer,
};

export const hydrationMetaReducer = (reducer: ActionReducer<AppState>): ActionReducer<AppState> => {
    return (state, action) => {
        if (action.type === INIT || action.type === UPDATE) {
            const storageValue = localStorage.getItem(Constants.storage.STORAGE_KEY);
            if (storageValue) {
                try {
                    return JSON.parse(storageValue);
                } catch {
                    localStorage.removeItem(Constants.storage.STORAGE_KEY);
                }
            }
        }
        const nextState = reducer(state, action);
        localStorage.setItem(Constants.storage.STORAGE_KEY, JSON.stringify(nextState));
        return nextState;
    };
};

export const metaReducers: MetaReducer<AppState>[] = [hydrationMetaReducer];