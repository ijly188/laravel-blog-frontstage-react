import React, { Component } from 'react';
import RouteView from './components/RouteView';
import routes from './routes';

// 可以考慮用 functional program 重寫
class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        {/* AuthComponent */}
        {/* LoadingEffect特效層, 確保API如預期回來 */}

        <RouteView mainRoutes={routes} />
      </React.Fragment>
    )
  }
}

export default App;