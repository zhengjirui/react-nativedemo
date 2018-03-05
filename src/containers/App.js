import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {Header} from '../components';
export default class App extends Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false,
        }
    }

    render() {
        return (
            <div>
                <Header
                    // leftBack={this.renderLeft()}
                    middleTitle={"标题"}
                    rigthContent={"更多"}
                />
                {
                    this.state.initDone
                        ? this.props.children
                        : <div>loading</div>
                }
            </div>
        )
    }

    renderLeft = () => {
        return <div>asdkfj</div>
    }

    componentDidMount() {
        setTimeout(function (){
            console.log(this);
            this.setState({
                initDone:true,
            })
        }.bind(this),1000);

    }

    // componentDidMount() {
    //     const _this = this;
    //     setTimeout(function (){
    //         _this.setState({
    //             initDone:true,
    //         })
    //     },1000);
    // }
}