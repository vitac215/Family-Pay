import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import * as actions from '../actions';

export default class AddMember extends Component {

  render() {

    return (
      <div>
        <div className="nav-big">
          <div className="nav-title">Add Member</div>
          <img src="" className="nav-big-photo" width="120px" height="120px" />
        </div>
        <img className="hamburger" src="/img/hamburger.svg" />
        <div id="container-under">
          <input type="text" className="form-control myinput input-in-app" placeholder="Member's Name" autoComplete="off" />
          <div style={{height: 52 + 'px'}}></div>
          <div style={{margin: 'auto'}}>Monthly Quota of This Member</div>
          <input type="text" className="form-control myinput input-in-app" placeholder="Monthly Quota" autoComplete="off" />
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
