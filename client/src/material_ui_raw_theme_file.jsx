import {getMuiTheme} from 'material-ui/styles'

const rawBaseTheme = {
  "spacing": {
      "iconSize": 24,
      "desktopGutter": 24,
      "desktopGutterMore": 32,
      "desktopGutterLess": 16,
      "desktopGutterMini": 8,
      "desktopKeylineIncrement": 64,
      "desktopDropDownMenuItemHeight": 32,
      "desktopDropDownMenuFontSize": 15,
      "desktopDrawerMenuItemHeight": 48,
      "desktopSubheaderHeight": 48,
      "desktopToolbarHeight": 56
  },
  "fontFamily": "Roboto, sans-serif",
  "palette": {
      "primary1Color": "#0097a7",
      "primary2Color": "#0097a7",
      "primary3Color": "#757575",
      "accent1Color": "#ff4081",
      "accent2Color": "#f50057",
      "accent3Color": "#ff80ab",
      "textColor": "#9e9e9e",
      "secondaryTextColor": "rgba(255, 255, 255, 0.7)",
      "alternateTextColor": "#303030",
      "canvasColor": "#303030",
      "borderColor": "rgba(255, 255, 255, 0.3)",
      "disabledColor": "rgba(255, 255, 255, 0.3)",
      "pickerHeaderColor": "rgba(255, 255, 255, 0.12)",
      "clockCircleColor": "rgba(255, 255, 255, 0.12)",
      "shadowColor": "rgba(0, 0, 0, 1)"
  },
  "themeName": "Dark Theme",
  "listItem": {
      "secondaryTextColor": "#9e9e9e"
  },
  "toolbar": {
      "backgroundColor": "#303030"
  },
  "snackbar": {
      "textColor": "#ff4081",
      "backgroundColor": "rgba(0, 0, 0, 0.54)"
  }
}

//Theme must be wrapped in funciton getMuiTheme
export default getMuiTheme(rawBaseTheme)
