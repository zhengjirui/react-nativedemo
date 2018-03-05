import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import * as userinfoActions from "../../actions/userinfo";
class index extends Component{
    render(){
        return (
            <div>
                <p onClick={this.onClickEvent.bind(this)}>
                    list back and update userinfo
                </p>
            </div>
        )
    }

    onClickEvent(){
        //返回的两种状态
        window.history.back();
        // const userinfo = this.props.userinfo;
        // console.log(userinfo.name);
        // console.log(userinfo.age);
        // console.log(userinfo.sex);
        //
        // userinfo.name = "已更改";
        // userinfo.age = "11";
        // userinfo.sex = "不详";

        // this.props.userinfoActions.loginUpate(userinfo)
        // browserHistory.push('/');

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


export default connect(mapStateToProps,mapDispatchToProps)(index)
