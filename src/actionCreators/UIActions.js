import {TOGGLE_SLIDE_DRAWER, NAVBAR_TITLE} from '../constants/actionTypes'


export const toggleSlideDrawer = () => ({type: TOGGLE_SLIDE_DRAWER})
export const setNavBarTitle = (navTitle) => ({type: NAVBAR_TITLE, navTitle})
