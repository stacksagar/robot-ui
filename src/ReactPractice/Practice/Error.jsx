import React, { Component } from 'react'

export default class Error extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       hasError : false
    }
  }
  
  static getDerivedStateFromError(error) {
    return {
      hasError : true
    }
  }

  render() {
    return (
      <>
       {this.state.hasError ? <h4 className="text-danger">You have missing some brand</h4> : this.props.children}
      </>
    )
  }
}
