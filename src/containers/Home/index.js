import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as userinfoActions from '../../actions/userinfo';

class index extends Component {

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
                <Link to={'/list'}>
                    go to list
                </Link>

                <p onClick={() => {
                    this.props.userinfoActions.login({
                        name: '陈金定',
                        age: 24,
                        sex: '女'
                    })
                }}>
                    姓名：{this.props.userinfo.name}<br/>
                    年龄：{this.props.userinfo.age}<br/>
                    性别：{this.props.userinfo.sex}<br/>
                </p>
            </div>
        )
    }

    componentDidMount() {
        // this.props.userinfoActions.login({
        //     name: '郑积瑞',
        //     age: 25,
        //     sex: '男'
        // })
    }
}

function mapStateToProps(state) {

    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(index);