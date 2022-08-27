import { StoreState } from "../state/store.state";
import { Action, ActionReducerMap, createReducer, MetaReducer, on } from "@ngrx/store";
import * as UserActions from "../actions/user.action";
import { AppState } from "../app.state";

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

export const metaReducers: MetaReducer<AppState>[] = [];