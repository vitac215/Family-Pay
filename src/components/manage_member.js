import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import * as actions from '../actions';

export default class ManageMember extends Component {

  render() {

    return (
      <div>
        <div className="nav-big">
          <div className="nav-title">Manage Member</div>
          <img src="" className="nav-big-photo" width="120px" height="120px" />
        </div>
        <img className="hamburger" src="/img/hamburger.svg" />
        <div style={{height: 20 + 'px'}}></div>
        <div style={{textAlign: 'center'}}>Noah</div>
        <div id="container-under">
          <input type="text" className="form-control myinput input-in-app" placeholder="Member's Name" autoComplete="off" />
          <div style={{height: 52 + 'px'}}></div>
          <div style={{'text-align': 'center'}}>Monthly Quota of This Member</div>
          <div style={{height: 10 + 'px'}}></div>
          <input type="text" className="form-control myinput input-in-app" placeholder="Monthly Quota" autoComplete="off" />
          <div style={{height: 52 + 'px'}}></div>
          <div style={{'text-align': 'center'}}>Maximum One-Time Spending Limit</div>
          <div style={{height: 10 + 'px'}}></div>
          <button className="primary-button">Done</button>

        </div>
      </div>
    );
  }
} // end of class

// function mapStateToProps(state) {
//   return { errorMsg: state.auth.error };
// }
//
//
// export default reduxForm({
//   form: 'LoginForm',
//   fields: ['username', 'password'],
//   validate
// }, mapStateToProps, actions )(IndexLogin);
