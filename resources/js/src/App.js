import React, { Component } from 'react';
import LoadingEffect from './containers/common/LoadingEffectContainer';
import RouteView from './components/RouteView'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* AuthComponent */}
        {/* LoadingEffect特效層, 確保API如預期回來 */}
        <LoadingEffect/>

        <RouteView />
      </React.Fragment>
    )
  }
}

export default App;