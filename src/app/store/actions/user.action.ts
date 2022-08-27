import { createAction, props } from "@ngrx/store";
import { Constants } from "src/app/utils/constant";

export const loginSuccessAction = createAction(
    Constants.actionType.LOGIN_SUCCESS, props<{ token: string }>()
);

export const logoutSuccessAction = createAction(
    Constants.actionType.LOGOUT_SUCCESS
);