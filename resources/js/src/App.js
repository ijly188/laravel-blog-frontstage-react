import React, { Component } from 'react';
import LoadingEffect from './containers/common/LoadingEffectContainer';
import RouteView from './components/RouteView'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <LoadingEffect/>
        <RouteView />
      </React.Fragment>
    )
  }
}

export default App;