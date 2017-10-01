import * as Types from "./actionTypes";

export function onlineAction() {
  return { type: Types.ONLINE }
}

export function offlineAction() {
  return { type: Types.OFFLINE }
}