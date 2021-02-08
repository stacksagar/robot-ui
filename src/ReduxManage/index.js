import React from 'react'
import Value from './value'
import { Provider } from 'react-redux'
import { Store } from './Store'

const ReduxManage = () => {
 return (
  <Provider store={Store}>
   <Value />
  </Provider>
 )
}

export default ReduxManage
