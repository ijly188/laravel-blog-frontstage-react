import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import RouteView from '../RouteView';


export default class Electronics extends Component {
  render() {
    const { routes } = this.props;
    console.log(this.props);
    return (
      <>
        Electronics
        {renderRoutes(routes)}
        
        {/* <RouteView mainRoutes={routes} /> */}
      </>
    )
  }
}
