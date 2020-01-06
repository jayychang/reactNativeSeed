import { NavigationActions, StackActions, NavigationParams, NavigationState } from 'react-navigation'

import { Routes } from 'src/constants/navigation'

let _navigator

const setTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef
}

const push = (routeName: string, params?: NavigationParams) => {
  _navigator.dispatch(
    StackActions.push({
      routeName,
      params,
    }),
  )
}


function pop() {
  _navigator.dispatch(
    StackActions.pop({
      n: 1,
    }),
  )
}

export {
  Routes,
  setTopLevelNavigator,
  push,
  pop,
}
