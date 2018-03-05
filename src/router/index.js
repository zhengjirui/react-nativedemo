import React, {Component} from 'react';
import {Router, Route,IndexRoute } from 'react-router';

import App from '../containers/App';
import Home from '../containers/Home';
import Detail from '../containers/Detail';
import List from '../containers/List';
import NoFound from '../containers/NoFound';

export default class index extends Component {
    updateHandle(){
        console.info("每次route调用都会触发");
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path={"/"} component={App}>
                    <IndexRoute component={Home} />
                    <Route path={"detail/:id"} component={Detail} />
                    <Route path={"list"} component={List} />
                    <Route path={"*"} component={NoFound} />
                </Route>

            </Router>
        )
    }
}