import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import routes from './routes'
import RouteView from './components/RouteView'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <React.Suspense fallback={loading}> */}
        <RouteView />
        {/* </React.Suspense> */}
      </React.Fragment>
    )
  }
}

export default App;