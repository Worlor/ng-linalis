import {User} from "../shared/model/user";
import {Action} from "@ngrx/store";
/**
 * Created by Worlor on 24/01/2017.
 */

export const ADD_USER = "ADD_USER";
export const RESET = "RESET";

export function userReducer(state: User[] = [], action: Action):any {
  switch(action.type)
  {
    case ADD_USER:
      return state.push(action.payload);
    case RESET:
      return [];
    default:
      return state;
  }
}
