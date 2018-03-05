import React, {Component} from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import './header.css';

export default class index extends Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false,
        }
    }

    render() {
        return (
            <div className='header'>
                <div className='left' >{this.renderLeft()}</div>
                <div className='middle'>{this.props.middleTitle ? this.props.middleTitle : ""}</div>
                <div className='right'>{this.props.rigthContent ? this.props.rigthContent : ""}</div>
            </div>
        )
    }

    renderLeft = () => {
        if(this.props.leftBack){
            return (
                <span >
                    {this.props.leftBack}
                </span>
            )
        }else{
            return (
                <div className='left'>
                    <div style={{margin:'auto'}}><img style={{width:10,height:15}} src={require('./back.png')}/></div>

                    <span >返回</span>
                </div>
            )
        }


    }

    renderMiddle = () => {
        return (
            <div>

            </div>
        )
    }

    renderRight = () => {
        return (
            <div>

            </div>
        )
    }
}

