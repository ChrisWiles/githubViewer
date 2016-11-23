import {TOGGLE_SLIDE_DRAWER, NAVBAR_TITLE, REPO_URL} from '../constants/actionTypes'


export const toggleSlideDrawer = () => ({type: TOGGLE_SLIDE_DRAWER})
export const setNavBarTitle = (navTitle) => ({type: NAVBAR_TITLE, navTitle})
export const setRepoURL = (repoURL) => ({type: REPO_URL, repoURL})
