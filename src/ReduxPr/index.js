import React from 'react'
import Count from './Count'
import { Provider } from 'react-redux'
import { Store } from './Store'
import UseRedux from './UseRedux'
import Users from './Users' 

function ReduxPr() {
 return (
  <Provider store={Store}>
   <Count />  
   <UseRedux />
   <Users/>
  </Provider>
 )
}

export default ReduxPr
