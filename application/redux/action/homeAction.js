import * as Types from "./actionTypes";

export function homeAction() {
  return { type: Types.HOME_SUCCESS,data:{} }
  //return { type: Types.HOME_FAILED,message:'error' }
}