import React, { Component } from 'react';
import LoadingEffect from './containers/common/LoadingEffectContainer';
import RouteView from './components/RouteView';
import routes from './routes';

class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        {/* AuthComponent */}
        {/* LoadingEffect特效層, 確保API如預期回來 */}
        <LoadingEffect/>

        <RouteView mainRoutes={routes} />
      </React.Fragment>
    )
  }
}

export default App;