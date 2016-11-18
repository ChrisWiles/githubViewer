import {GITHUB_ICON_POPOVER_TOGGLE, SET_GITHUB_ICON_POPOVER_ANCHOR} from '../constants/actionTypes'


export const setAnchor = (anchorEl) => ({type: SET_GITHUB_ICON_POPOVER_ANCHOR, anchorEl})
export const toggle = () => ({type: GITHUB_ICON_POPOVER_TOGGLE})
